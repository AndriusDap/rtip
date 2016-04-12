
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
                    id: 23,
                    name: "[2 for 1] Manchester United Museum & Tour",
                    city: "Manchester",
                    travelTime: "2h 45m",
                    image: "https://www.daysoutguide.co.uk/media/2503/7865-attractionimage.jpg"
                },
                {
                    id: 44,
                    name: "Sightseeing Liverpool Hop-Off Opentop Tour",
                    city: "Liverpool",
                    travelTime: "2h 30m",
                    image: "https://www.daysoutguide.co.uk/media/2702/1225418-attractionimage.jpg"
                },
                {
                    id: 12,
                    name: "Chester Zoo",
                    city: "Chester",
                    travelTime: "2h 3m",
                    image: "https://www.daysoutguide.co.uk/media/426478/chesterzoo.jpg"
                },
                {
                    id: 11,
                    name: "Liverpool Cathedral",
                    city: "Liverpool",
                    travelTime: "2h 35m",
                    image: "https://www.daysoutguide.co.uk/media/2776/1300967-attractionimage.jpg"
                },
                {
                    id: 5,
                    name: "LEGOLAND Discovery Centre Manchester",
                    city: "Manchester",
                    travelTime: "2h 55m",
                    image: "https://www.daysoutguide.co.uk/media/3007/1609607-attractionimage.jpg"
                }
            ];

            deferred.resolve(events);
        },1500);

        return deferred.promise;
    }

    public getThingToDo(id) {

        var deferred = this.$q.defer();

        this.$timeout(() => {
            deferred.resolve();
        }, 500);

        return deferred.promise;
    }
}

angular.module('thingsToDo')
    .service('thingsToDo.thingsToDoService', ThingsToDoService)


} // Ticketing
} // RailTech