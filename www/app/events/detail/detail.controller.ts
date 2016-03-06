'use strict';

module RailTech {
export module Events {

export class DetailController {

    private eventCity: EventCity;
    private selectedStations: string[];
   
    public static $inject = [
        '$scope',
        '$ionicLoading',
        '$timeout',
        '$stateParams',
        'ionicMaterialMotion',
        'ionicMaterialInk',
        'EventsService'];

    constructor(
            private $scope,
            private $ionicLoading,
            private $timeout,
            $stateParams,
            ionicMaterialMotion, 
            ionicMaterialInk,
            eventsService: EventsService) {

        $scope.$parent.showHeader();
        $scope.$parent.setExpanded(false);

        var city = $stateParams.cityName;

        this.$ionicLoading.show({
              template: 'Loading ' + city + '...'
            });

        eventsService.getStationDetail( city )
            .then((found) => {

                this.eventCity = found;

                this.$ionicLoading.hide();

                ionicMaterialMotion.slideUp({
                    selector: '.slide-up'
                });

            $timeout(function() {
                ionicMaterialMotion.fadeSlideInRight({
                    startVelocity: 3000
                });
            }, 700);
            });

        // Set Ink
        ionicMaterialInk.displayEffect();
    }
}

angular.module('events')
    .controller('DetailController', DetailController)


} // Events
} // RailTech
