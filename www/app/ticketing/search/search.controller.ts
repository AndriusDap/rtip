'use strict';

module RailTech {

export class SearchController {

    public departDate: Date;
    public arriveDate: Date;
    public toStationSearch: string;
    public toStation: string;
    public fromStationSearch: string;
    public fromStation: string;

    public static $scope = [
        '$state',
        '$scope', 
        'ionicMaterialInk', 
        'ionicMaterialMotion'];

    constructor(
            private $state,
            $scope, 
            ionicMaterialInk, 
            ionicMaterialMotion) {

        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
        $scope.$parent.setHeaderFab(false);

        ionicMaterialMotion.pushDown({
            selector: '.push-down'
        });
        ionicMaterialMotion.fadeSlideInRight({
            selector: '.animate-fade-slide-in .item'
        });

    }

    public fromQuerySearch(query) {
        var results = query ? 
            stations.filter( createFilterFor(query) ) : 
            stations;

        return results;
    }

    public findResults() {
        this.$state.go('app.ticketing.results');
    }

    private createFilterFor(query): (state: SearchStation) => boolean {
        var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                var lowercaseDisplay = angular.lowercase(state.display);
                return (lowercaseDisplay.search(lowercaseQuery) >= 0);
        };
    }
}

angular.module('ticketing')
    .controller('SearchController', SearchController)

}
