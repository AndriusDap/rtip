
module RailTech {
export module ThingsToDo {

export class ThingsToDoService {

    public ticket;
    public journey;

    static $inject = [
        "$http",
        "$q",
        "$timeout"];

    constructor(
            private $http,
            private $q,
            private $timeout) {

    }

    public findThingsToDo() {

        var deferred = this.$q.defer();

        this.$timeout(() => {
            var events = [
                {
                    name: "Crafty burger",
                    city: "Leicester",
                    travelTime: "1h 30m",
                    image: "http://static1.squarespace.com/static/53a44202e4b01c88f6aaea8c/t/53bfac04e4b01113f804f586/1405070347201/RITD-LocHeads_Manchester.jpg"
                },
                {
                    name: "Bem Brasil",
                    city: "Manchester",
                    travelTime: "2h 30m",
                    image: "http://static1.squarespace.com/static/53a44202e4b01c88f6aaea8c/t/53bfac04e4b01113f804f586/1405070347201/RITD-LocHeads_Manchester.jpg"
                },
                {
                    name: "Bem Brasil",
                    city: "Manchester",
                    travelTime: "2h 30m",
                    image: "http://static1.squarespace.com/static/53a44202e4b01c88f6aaea8c/t/53bfac04e4b01113f804f586/1405070347201/RITD-LocHeads_Manchester.jpg"
                }
            ];

            deferred.resolve(events);
        },2);

        return deferred.promise;
    }
}

angular.module('thingsToDo')
    .service('thingsToDo.thingsToDoService', ThingsToDoService)


} // Ticketing
} // RailTech