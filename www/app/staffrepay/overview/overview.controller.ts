'use strict';

module RailTech {
export module StaffRepay {

export class OverviewController {

    public historicalChart;
    public dailyChart;

    public static $inject = [
    '$scope'];

    constructor(
        private $scope) {
        $scope.$parent.setExpanded(false);

        this.historicalChart = {};
        this.dailyChart = {};

        this.historicalChart.data = [{
            key: "Historical Delay Submissions",
            values: [
            { "label" : "17/03" , "value" : 3 },
            { "label" : "18/03" , "value" : 5 },
            { "label" : "19/03" , "value" : 8 },
            { "label" : "20/03" , "value" : 5 },
            { "label" : "21/03" , "value" : 9 },
            { "label" : "22/03" , "value" : 8 },
            { "label" : "23/03" , "value" : 12 },
            ]
        }];

        this.historicalChart.options = {
            title: { enable: true, text: "Historical Claims"},
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 55
                },
                x: function(d){ return d.label; },
                y: function(d){ return d.value; },
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.0f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: 'Date (Last 7 days)'
                },
                yAxis: {
                    axisLabel: 'Delay claims',
                    axisLabelDistance: 30
                }
            }
        };

        this.dailyChart.data = [
            {
                key: "Fullfilled",
                y: 5
            },
            {
                key: "Rejected",
                y: 2
            },
            {
                key: "Outstanding",
                y: 10
            }
        ];

        this.dailyChart.options = {
            title: { enable: true, text: "Claims today"},
            chart: {
                type: 'pieChart',
                height: 450,
                "donut": true,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
    }

}

angular.module('staffrepay')
    .controller('staffrepay.OverviewController', OverviewController)


} // Repay
} // RailTech
