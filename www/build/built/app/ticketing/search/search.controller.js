'use strict';
var RailTech;
(function (RailTech) {
    var SearchController = (function () {
        function SearchController($state, $scope, ionicMaterialInk, ionicMaterialMotion) {
            this.$state = $state;
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
        SearchController.prototype.fromQuerySearch = function (query) {
            var results = query ?
                RailTech.stations.filter(createFilterFor(query)) :
                RailTech.stations;
            return results;
        };
        SearchController.prototype.findResults = function () {
            this.$state.go('app.ticketing.results');
        };
        SearchController.prototype.createFilterFor = function (query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                var lowercaseDisplay = angular.lowercase(state.display);
                return (lowercaseDisplay.search(lowercaseQuery) >= 0);
            };
        };
        SearchController.$scope = [
            '$state',
            '$scope',
            'ionicMaterialInk',
            'ionicMaterialMotion'];
        return SearchController;
    }());
    RailTech.SearchController = SearchController;
    angular.module('ticketing')
        .controller('SearchController', SearchController);
})(RailTech || (RailTech = {}));
