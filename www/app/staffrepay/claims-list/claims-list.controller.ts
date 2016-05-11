'use strict';

module RailTech {
export module StaffRepay {

class ClaimsListController {

    public historicalChart;
    public dailyChart;

	public claims;
	
	private pageNumber;
	private limit;

    public static $inject = [
    	"ClaimService"];

    constructor(private claimService: ClaimService) {
    	this.getClaims();
        this.setupChart();
    }

    private getClaims() {
    	this.claimService.getClaims()
    		.then((results) => {
                console.log(results);
    			this.claims = results;
    		});
    }

    private setupChart() {
        var last7days = [];
        var today = new Date();

        for (var i = 0; i < 7; i++) {
            last7days.push(today.toLocaleDateString());
            today.setDate(today.getDate() + 1);
        }

        this.historicalChart = {

            options: {
                chart: {
                    type: 'column'
                }
            },
            title: {
                text: 'Historical Claims (Last 7 days)'
            },
            xAxis: {
                categories: last7days
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'Accepted',
                    data: [12, 2, 5, 3, 1, 5, 2],
                    color: "#7EF064"
                }, 
                {
                    name: 'Rejected',
                    data: [14, 6, 23, 13, 52, 3, 23],
                    color: "#9B0400"
                }, 
                {
                    name: 'Outstanding',
                    data: [23, 3, 35, 23, 12, 2, 23],
                    color: "#68A3EA"
                }
            ]
        };


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
                name: 'Brands',
                colorByPoint: true,
                data: [
                    {
                        name: 'Accepted',
                        y: 13,
                        sliced: true,
                        selected: true,
                        color: "#7EF064"
                    }, {
                        name: 'Rejected',
                        y: 12,
                        color: "#9B0400"
                    }, {
                        name: 'Outstanding',
                        y: 130,
                        color: "#68A3EA"
                    }]
            }]
        };
    }

}

angular.module('staffrepay')
    .controller('staffrepay.ClaimsListController', ClaimsListController)


} // Repay
} // RailTech
