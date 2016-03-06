'use strict';
var RailTech;
(function (RailTech) {
    var Events;
    (function (Events) {
        var OverviewController = (function () {
            function OverviewController($scope, $ionicLoading, eventsService) {
                var _this = this;
                this.$scope = $scope;
                this.$ionicLoading = $ionicLoading;
                $scope.$parent.showHeader();
                $scope.$parent.setExpanded(false);
                this.$ionicLoading.show({
                    template: 'Loading cities...'
                });
                eventsService.getStationsList()
                    .then(function (found) {
                    _this.stations = found;
                    _this.$ionicLoading.hide();
                    console.log(_this.stations);
                });
            }
            OverviewController.prototype.stationQuerySearch = function (query) {
                var results = query ?
                    this.stations.filter(this.createFilterFor(query)) :
                    this.stations;
                return results;
            };
            OverviewController.prototype.createFilterFor = function (query) {
                var lowercaseQuery = angular.lowercase(query);
                return function filterFn(state) {
                    var lowercaseDisplay = angular.lowercase(state.city);
                    return (lowercaseDisplay.search(lowercaseQuery) >= 0);
                };
            };
            OverviewController.$inject = [
                '$scope',
                '$ionicLoading',
                'EventsService'];
            return OverviewController;
        }());
        Events.OverviewController = OverviewController;
        angular.module('events')
            .controller('OverviewController', OverviewController);
    })(Events = RailTech.Events || (RailTech.Events = {})); // Events
})(RailTech || (RailTech = {})); // RailTech
