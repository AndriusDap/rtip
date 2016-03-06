'use strict';

module RailTech {
export module Events {

export class OverviewController {

    private stationSearch: string;
    private selectedStations: string[];
    private stations = [{
            name: "London Euston",
            cover: "http://i.dailymail.co.uk/i/pix/2013/02/06/article-2274355-02DADEA00000044D-633_634x405.jpg",
            events: 4
        },
        {
            name: "London Waterloo",
            cover: "http://www.moodiereport.com/images/waterloo_balcony_600.jpg",
            events: 7
        },
        {
            name: "London Kings Cross",
            cover: "http://i.telegraph.co.uk/multimedia/archive/02300/BE3MCE_2300278b.jpg",
            events: 18
        },
        {
            name: "London Paddington",
            cover: "http://cdn.ltstatic.com/2009/January/DE286581_942long.jpg",
            events: 2
        },
        {
            name: "Manchester",
            cover: "http://static1.squarespace.com/static/534f9765e4b02e8e0e0e54aa/53583b20e4b07ec2da390417/53583b29e4b01c3d34566403/1398291255971/manchesterimage6.jpg",
            events: 5
        },
        {
            name: "Birmingham",
            cover: "http://www.lancaster.ac.uk/colleges/graduate/wp-content/uploads/2016/01/Birmingham-AP68276_3152879b.jpg",
            events: 2
        },
        {
            name: "Southampton",
            cover: "https://www.propertycashbuyers.com/wp-content/uploads/2015/09/Southampton-city-skyline-of-commercial-property.jpg",
            events: 4
        }]

    public static $inject = [
        '$scope'];

    constructor(
            private $scope) {

        $scope.$parent.showHeader();
        $scope.$parent.setExpanded(false);
    }

    public stationQuerySearch(query) {
        var results = query ? 
            this.stations.filter( this.createFilterFor(query) ) : 
            this.stations;

        return results;
    }

    private createFilterFor(query): (state: SearchStation) => boolean {
        var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                var lowercaseDisplay = angular.lowercase(state.name);
                return (lowercaseDisplay.search(lowercaseQuery) >= 0);
        };
    }
}

angular.module('events')
    .controller('OverviewController', OverviewController)


} // Events
} // RailTech
