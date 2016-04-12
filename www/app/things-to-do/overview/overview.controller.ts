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

        var datetime = new Date();
        datetime.setHours(2,30);

        this.settings = {
            datetime: datetime,
            location: "London"
        }

        this.findEvents();
        this.setupWatch();
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

    private setupWatch() {
        this.$scope.$watch('$ctrl.settings', (newVal, oldVal) => {
            this.findEvents();
        }, true);
    }
}

angular.module('thingsToDo')
    .controller('thingsToDo.OverviewController', OverviewController)


} // Repay
} // RailTech
