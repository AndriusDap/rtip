'use strict';

module RailTech {
export module ThingsToDo {

export class OverviewController {

    private settings;
    private events;

    public static $inject = [
        "$scope",
        "$ionicLoading",
        "thingsToDo.thingsToDoService"];

    constructor(
        private $scope,
        private $ionicLoading,
        private thingsToDoService) {

        this.settings = {
            date: "Friday, 24th March",
            time: "3 hours",
            location: "London"
        }

        this.findEvents();
    }

    public findEvents() {
        this.$ionicLoading.show();

        this.thingsToDoService.findThingsToDo()
            .then((result) => {

                this.events = result;
                this.$scope.$broadcast('scroll.refreshComplete');
                this.$ionicLoading.hide();
            });     

    }

}

angular.module('thingsToDo')
    .controller('thingsToDo.OverviewController', OverviewController)


} // Repay
} // RailTech
