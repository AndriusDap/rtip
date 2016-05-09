'use strict';

module RailTech {
export module ThingsToDo {

class EventController {

    private event;
    private ticketsUrl;
    private fields = {
        "RETURN": "rtn",
        "ORIGIN": "onlc",
        "DESTINATION": "dnlc",
        "DEPART_AFTER": "outda",
        "DEPART_DAY": "outd",
        "DEPART_MONTH": "outm",
        "DEPART_HOUR": "outh",
        "DEPART_MINUTE": "outmi",
        "RETURN_DAY": "retd",
        "RETURN_MONTH": "retm",
        "RETURN_HOUR": "reth",
        "RETURN_MINUTE": "retmi",
        "ADULTS": "nad"
    };

    public static $inject = [
        "$scope",
        "$ionicLoading",
        "ionicMaterialMotion",
        "ionicMaterialInk",
        "thingsToDo.thingsToDoService",
        "$stateParams",
        "$rootScope"];

    constructor(
            private $scope,
            private $ionicLoading,
            private ionicMaterialMotion,
            private ionicMaterialInk,
            private thingsToDoService,
            private $stateParams,
            private $rootScope) {

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

        this.createTrainTicketsUrl()
    }

    public getEvent(id) {
        this.$ionicLoading.show();

        return this.thingsToDoService.getThingToDo(id)
            .then((result) => {

                this.event = result;
                this.$ionicLoading.hide();
            });     

    }

    private createTrainTicketsUrl() {

        var url;
        var toc = this.$rootScope.toc.toUpperCase();

        switch(toc) {
            case "GWR":
                url = "http://tickets.gwr.com/gw/en/landing/tis";
                break;
            case "VTEC":
                url = "http://tickets.virgintrainseastcoast.com/ec/en/";
                break;
            case "C2C":
                url = "http://tickets.c2c-online.co.uk/c2c/en/";
                break;
            case "CHILTERN":
                url = "http://tickets.chilternrailways.co.uk/ch/en/";
                break;
            default:
                console.error("Error, no TOC found!");
                return;
        }

        var qps = [];

        var addP = (field, val) => {
            var param = this.fields[field] + "=" + val;
            qps.push(param)
        }

        var currDate = new Date();

        // addP("ORIGIN", 6417);
        // addP("DESTINATION", 1072);
        addP("DEPART_AFTER", "y");
        addP("DEPART_MONTH", currDate.getMonth() + 1); // Adding month for padding
        addP("DEPART_DAY", currDate.getDate());
        addP("DEPART_HOUR", currDate.getHours() + 1);
        addP("DEPART_MINUTE", currDate.getMinutes());
        addP("ADULTS", 1);

        this.ticketsUrl = url + "?" + qps.join("&");

    }

}

angular.module('thingsToDo')
    .controller('thingsToDo.EventController', EventController)


} // Repay
} // RailTech
