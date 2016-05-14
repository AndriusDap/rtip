'use strict';

module RailTech {
export module StaffRepay {

class ClaimAnalyticsController {

    public dailyChart;

    public selectedClaim;
	public claims;

    public static $inject = [
    	"ClaimService",
        "$stateParams"];

    constructor(
            private claimService: ClaimService,
            private $stateParams) {

    	this.getClaims();
        this.setupChart();
    }

    private getClaims() {
    	this.claimService.getClaims()
    		.then((results) => {
                console.log(results);
    			this.claims = results;
                this.selectClaim(this.claims[0]);
    		});
    }

    public selectClaim(claimId) {

        this.claimService.getClaim(claimId)
            .then((delayClaim) => {

                console.log(delayClaim)
                this.selectedClaim = delayClaim;
            });
    }

    private setupChart() {
        
        this.activityChart = {
            options: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: true,
                    type: 'pie'
                }
            },
            title: {
                text: 'Claims for today'
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
                        y: 13,
                        sliced: true,
                        selected: true,
                        color: "#018675"
                    }, {
                        name: 'Rejected',
                        y: 12,
                        color: "#E75753"
                    }, {
                        name: 'Outstanding',
                        y: 130,
                        color: "#015086"
                    }]
            }]
        };

    }

}

angular.module('staffrepay')
    .controller('staffrepay.ClaimAnalyticsController', ClaimAnalyticsController)


} // Repay
} // RailTech
