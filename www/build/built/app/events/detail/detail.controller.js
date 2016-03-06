'use strict';
var RailTech;
(function (RailTech) {
    var Events;
    (function (Events) {
        var DetailController = (function () {
            function DetailController($scope, $ionicLoading, $timeout, $stateParams, ionicMaterialMotion, ionicMaterialInk, eventsService) {
                var _this = this;
                this.$scope = $scope;
                this.$ionicLoading = $ionicLoading;
                this.$timeout = $timeout;
                $scope.$parent.showHeader();
                $scope.$parent.setExpanded(false);
                var city = $stateParams.cityName;
                this.$ionicLoading.show({
                    template: 'Loading ' + city + '...'
                });
                eventsService.getStationDetail(city)
                    .then(function (found) {
                    _this.eventCity = found;
                    _this.$ionicLoading.hide();
                    ionicMaterialMotion.slideUp({
                        selector: '.slide-up'
                    });
                    $timeout(function () {
                        ionicMaterialMotion.fadeSlideInRight({
                            startVelocity: 3000
                        });
                    }, 700);
                });
                // Set Ink
                ionicMaterialInk.displayEffect();
            }
            DetailController.$inject = [
                '$scope',
                '$ionicLoading',
                '$timeout',
                '$stateParams',
                'ionicMaterialMotion',
                'ionicMaterialInk',
                'EventsService'];
            return DetailController;
        }());
        Events.DetailController = DetailController;
        angular.module('events')
            .controller('DetailController', DetailController);
    })(Events = RailTech.Events || (RailTech.Events = {})); // Events
})(RailTech || (RailTech = {})); // RailTech
