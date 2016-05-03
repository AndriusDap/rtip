
module RailTech {
  export module ThingsToDo {

    export class ThingsToDoService {

      public ticket;
      public journey;

      private thingsToDoUrl = "/api/igeolise/events";

      static $inject = [
      "$http",
      "$q",
      "$timeout"];

      constructor(
        private $http,
        private $q,
        private $timeout) {

      }

      public findThingsToDo(coords, travelTime, startTime, toc) {
      console.log(coords + ", " + travelTime + ", " + startTime + ", " + toc);

        var deferred = this.$q.defer();

        var request = {
          "coords": coords,
          "travel_time": travelTime,
          "start_time": startTime,
          "toc": "Virgin Trains"
        };

        this.$http.post(this.thingsToDoUrl, request)
          .then((response) => {
            
            this.events = response["data"]["results"];
            deferred.resolve(response["data"]["results"]);

          });

        return deferred.promise;
      }

      public getThingToDo(id) {

        var deferred = this.$q.defer();

        this.$timeout(() => {

          for (var i = 0; i < this.events.length; i++) {
            if(this.events[i].event.id.toString() === id) {
              deferred.resolve(this.events[i]);
            }
          }

          deferred.reject();

        }, 500);

        return deferred.promise;
      }
    }

    angular.module('thingsToDo')
    .service('thingsToDo.thingsToDoService', ThingsToDoService)


} // Ticketing
} // RailTech