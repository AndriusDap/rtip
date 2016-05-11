
module RailTech {
  export module ThingsToDo {

    export class ThingsToDoService {

      public events;
      public ticket;
      public journey;

      private thingsToDoUrl = "/api/igeolise/events";
      private thingsToDoRoutesUrl = "/api/igeolise/route";

      static $inject = [
      "$http",
      "$q",
      "$timeout",
      "$ionicModal",
      "$rootScope"];

      constructor(
          private $http,
          private $q,
          private $timeout, 
          private $ionicModal,
          private $rootScope) {

      }

      public findThingsToDo(location, travelTime, startTime, toc) {
        console.log(location.lat + ", " + location.lng + ", " + location.city + ", " + travelTime + ", " + startTime + ", " + toc)

        var deferred = this.$q.defer();

        var request = {
          "coords": [location.lat, location.lng],
          "city": location.city,
          "travel_time": travelTime,
          "start_time": startTime,
          "toc": "GWR"
        };

        this.$http.post(this.thingsToDoUrl, request)
          .then((response) => {
            
            this.events = response["data"]["results"];
            deferred.resolve(this.events);

          });

        return deferred.promise;
      }

      public getRoute(location, travelTime, startTime, toc, eventId) {

        var deferred = this.$q.defer();

        var request = {
          "coords": [location.lat, location.lng],
          "travel_time": travelTime,
          "start_time": startTime,
          "event_id": eventId,
          "toc": "GWR"
        };

        this.$http.post(this.thingsToDoRoutesUrl, request)
          .then((response) => {

            console.log(response.data)
            deferred.resolve(response.data);

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

        console.log("nop...e");
        deferred.reject();
        return deferred.promise;
      }

      public pickNewLocationModal() {

        var deferred = this.$q.defer();

        var modalLocation = "app/things-to-do/location-picker/";
        var modalTemplate = "location-picker.html";
        var modalScope = this.$rootScope.$new(true); // True makes scope isolated

        this.$ionicModal
          .fromTemplateUrl(modalLocation + modalTemplate, {
            scope: modalScope,
            animation: "slide-in-up"
          })
          .then((modal) => {
            modalScope.modal = modal;
            modalScope.modal.show();
          });

        modalScope.$on("$destroy", () => {
          modalScope.modal.remove();
        });
        modalScope.$on('modal.hidden', () => {
          modalScope.$destroy();
        });
        modalScope.$on('modal.removed', () => {
          deferred.resolve(modalScope.modal.locationChosen)
          modalScope.$destroy();
        });

        return deferred.promise;
      }

    }

    angular.module('thingsToDo')
    .service('thingsToDo.thingsToDoService', ThingsToDoService)


} // Ticketing
} // RailTech