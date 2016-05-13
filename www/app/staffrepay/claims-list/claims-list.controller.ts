'use strict';

module RailTech {
export module StaffRepay {

class ClaimsListController {

    public historicalChart;
    public dailyChart;

	public claims;

    public claimId;
	
	private pageNumber;
	private limit;

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
                    color: "#018675"
                }, 
                {
                    name: 'Rejected',
                    data: [14, 6, 23, 13, 52, 3, 23],
                    color: "#E75753"
                }, 
                {
                    name: 'Outstanding',
                    data: [23, 3, 35, 23, 12, 2, 23],
                    color: "#015086"
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

        $(function () {

            var gaugeOptions = {

                chart: {
                    type: 'solidgauge'
                },

                title: null,

                pane: {
                    center: ['50%', '85%'],
                    size: '140%',
                    startAngle: -90,
                    endAngle: 90,
                    background: {
                        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                        innerRadius: '60%',
                        outerRadius: '100%',
                        shape: 'arc'
                    }
                },

                tooltip: {
                    enabled: false
                },

                // the value axis
                yAxis: {
                    stops: [
                        [0.1, '#55BF3B'], // green
                        [0.5, '#E75753'], // yellow
                        [0.9, '#DF5353'] // red
                    ],
                    lineWidth: 0,
                    minorTickInterval: null,
                    tickPixelInterval: 400,
                    tickWidth: 0,
                    title: {
                        y: -70
                    },
                    labels: {
                        y: 16
                    }
                },

                plotOptions: {
                    solidgauge: {
                        dataLabels: {
                            y: 5,
                            borderWidth: 0,
                            useHTML: true
                        }
                    }
                }
            };

            // The speed gauge
            $('#container-speed').highcharts(Highcharts.merge(gaugeOptions, {
                yAxis: {
                    min: 0,
                    max: 155,
                    title: {
                        text: 'Delay Claims'
                    }
                },

                credits: {
                    enabled: false
                },

                series: [{
                    name: 'Delay Claims',
                    data: [130],
                    dataLabels: {
                        format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                            ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                               '<span style="font-size:12px;color:silver">outstanding</span></div>'
                    },
                    tooltip: {
                        valueSuffix: ' outstanding'
                    }
                }]

            }));

            // The RPM gauge
            $('#container-rpm').highcharts(Highcharts.merge(gaugeOptions, {
                yAxis: {
                    min: 0,
                    max: 5,
                    title: {
                        text: 'RPM'
                    }
                },

                series: [{
                    name: 'RPM',
                    data: [1],
                    dataLabels: {
                        format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                            ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                               '<span style="font-size:12px;color:silver">* 1000 / min</span></div>'
                    },
                    tooltip: {
                        valueSuffix: ' revolutions/min'
                    }
                }]

            }));

        });
    }

}

angular.module('staffrepay')
    .controller('staffrepay.ClaimsListController', ClaimsListController)


} // Repay
} // RailTech
