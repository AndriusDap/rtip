
module RailTech {
  export module ThingsToDo {

    export class ThingsToDoService {

      public events;
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

        var deferred = this.$q.defer();

        var request = {
          "coords": coords,
          "city": "London",
          "travel_time": travelTime,
          "start_time": startTime,
          "toc": "GWR"
        };

        this.$http.post(this.thingsToDoUrl, request)
          .then((response) => {
            
            this.events = response["data"]["results"];
            deferred.resolve(response["data"]["results"]);

          });

        return deferred.promise;
      }

      public getThingToDo(id) {
        console.log(id);

        var deferred = this.$q.defer();

        for (var i = 0; i < this.events.length; i++) {
          if(this.events[i].event.id.toString() === id) {
            deferred.resolve(this.events[i]);
            return deferred.promise;
          }
        }

        deferred.reject();
        return deferred.promise;
      }
    }

    angular.module('thingsToDo')
    .service('thingsToDo.thingsToDoService', ThingsToDoService)


} // Ticketing
} // RailTech