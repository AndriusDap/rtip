'use strict';

module RailTech {
export module Events {

export class OverviewController {

    private stationSearch: string;
    private stations: string[];

    public static $inject = [
        '$scope',
        '$ionicLoading',
        'EventsService'];

    constructor(
            private $scope,
            private $ionicLoading,
            eventsService: EventsService) {

        $scope.$parent.showHeader();
        $scope.$parent.setExpanded(false);

        this.$ionicLoading.show({
              template: 'Loading cities...'
            });

        eventsService.getStationsList()
            .then((found) => {
                this.stations = found;

                this.$ionicLoading.hide();

                console.log(this.stations);
            });
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
                var lowercaseDisplay = angular.lowercase(state.city);
                return (lowercaseDisplay.search(lowercaseQuery) >= 0);
        };
    }
}

angular.module('events')
    .controller('OverviewController', OverviewController)


} // Events
} // RailTech
