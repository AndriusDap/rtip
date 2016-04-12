'use strict';

module RailTech {
export module ThingsToDo {

class EventController {

    private events;

    public static $inject = [
        "$scope",
        "$ionicLoading",
        "ionicMaterialMotion",
        "ionicMaterialInk",
        "thingsToDo.thingsToDoService"];

    constructor(
            private $scope,
            private $ionicLoading,
            private ionicMaterialMotion,
            private ionicMaterialInk,
            private thingsToDoService) {

        this.getEvent()
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
