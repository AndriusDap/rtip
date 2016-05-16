'use strict';

module RailTech {
export module StaffRepay {

class ClaimAnalyticsController {

    public activityCharts;
    public fraudPercent;

    public selectedClaim;
	public claims;

    public static $inject = [
    	"ClaimService",
        "$stateParams",
        "$ionicLoading",
        "$timeout",
        "$ionicPopup"];

    constructor(
            private claimService: ClaimService,
            private $stateParams,
            private $ionicLoading,
            private $timeout,
            private $ionicPopup) {

        this.activityCharts = [];

    	this.getClaims();
    }

    private getClaims() {
    	this.claimService.getClaims()
    		.then((results) => {
    			this.claims = results;
                this.selectClaim(this.claims[0].id);
    		});
    }

    public selectClaim(claimId) {

        this.$ionicLoading.show({
            template: "Loading claim analytics..."
        });

        var params = {
            id: claimId
        };


        this.claimService.getClaim(params)
            .then((delayClaim) => {
                console.log(delayClaim);
                this.selectedClaim = delayClaim;

                return this.setupFlagCharts(delayClaim.id);

            })
            .finally(() => {

                this.$ionicLoading.hide();
            });
    }

    private setupFlagCharts(claimId) {

        this.activityCharts = [];

        var params = {
            id: claimId
        };
        
        this.claimService.getAnalytics(params)
            .then((flaggedAnalytics) => {

                this.fraudPercent = flaggedAnalytics.fraudPercent;
                this.showImage = flaggedAnalytics.showImage;
                this.fraudMessage = flaggedAnalytics.fraudMessage;

                for(var i in flaggedAnalytics.analytics) {

                    var fa = flaggedAnalytics.analytics[i];

                    var title = '<span class="field">' + fa.field + ":</span> " 
                            + '<span class="value">' + fa.value + '</span>';


                    var chartConfig = this.setupFlagPieChart(
                            title
                            fa.outstanding,
                            fa.accepted,
                            fa.rejected,
                            fa.flagged);

                    this.activityCharts.push(chartConfig);
                }


            }); 
    }

    public takeAction() {

        this.$ionicLoading.show({
            template: "Creating report..."
        });

        this.$timeout(() => {

            this.$ionicPopup.alert({
                title: "Successful Claim Report",
                template: "The report for this fraudulent claim should download shortly."
            })

            this.$ionicLoading.hide();

            this.$timeout(() => {

                window.open("http://localhost:8100/assets/files/fraudreport.pdf", '_blank');

            }, 1000);

        }, 1000);
    }

    private setupFlagPieChart(title, outstanding, accepted, rejected, flagged) {

        console.log(title);

        return {
            options: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: true,
                    type: 'pie'
                }
            },
            title: {
                text: title,
                useHTML: true
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Claims',
                colorByPoint: true,
                data: [
                    {
                        name: 'Accepted',
                        y: accepted,
                        sliced: true,
                        selected: true,
                        color: "#018675"
                    }, {
                        name: 'Rejected',
                        y: rejected,
                        color: "#E75753"
                    }, {
                        name: 'Outstanding',
                        y: outstanding,
                        color: "#015086"
                    },{
                        name: 'Flagged',
                        y: flagged,
                        color: "#FF8600"
                    }]
            }]
        };
    }

}

angular.module('staffrepay')
    .controller('staffrepay.ClaimAnalyticsController', ClaimAnalyticsController)


} // Repay
} // RailTech
