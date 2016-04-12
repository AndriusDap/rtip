'use strict';

module RailTech {
export module ThingsToDo {

class EventController {

    private event;

    public static $inject = [
        "$scope",
        "$ionicLoading",
        "ionicMaterialMotion",
        "ionicMaterialInk",
        "thingsToDo.thingsToDoService",
        "$stateParams"];

    constructor(
            private $scope,
            private $ionicLoading,
            private ionicMaterialMotion,
            private ionicMaterialInk,
            private thingsToDoService,
            private $stateParams) {

        var eventId = $stateParams.eventId;

        this.getEvent(eventId)
            .then(() => {

                this.ionicMaterialMotion.slideUp({
                    selector: '.slide-up'
                });

                this.ionicMaterialMotion.fadeSlideInRight({
                    startVelocity: 3000
                });
            });

        this.ionicMaterialInk.displayEffect();
    }

    public getEvent(id) {
        this.$ionicLoading.show();

        return this.thingsToDoService.getThingToDo(id)
            .then((result) => {

                this.event = result;
                this.$ionicLoading.hide();
            });     

    }

}

angular.module('thingsToDo')
    .controller('thingsToDo.EventController', EventController)


} // Repay
} // RailTech
