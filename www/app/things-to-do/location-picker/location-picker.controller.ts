'use strict';

module RailTech {
export module ThingsToDo {

export class LocationPickerController {

    private googleMapsService;
    private googlePlacesService;
    private results;
    private query;

    public static $inject = [
        '$scope'];

    constructor(
            private $scope) {

        angular.element(document).ready(() => {
            this.setupInput();
        });
    }

    setupInput() {

        // Setup Google Auto-complete Service
        this.googleMapsService = new google.maps.places.AutocompleteService();
        // Setup Google Places Service
        this.googlePlacesService = new google.maps.places.PlacesService(document.createElement('div'));
    }

    chooseLocation(locationChosen) {

        // Get details for the selected location
        this.googlePlacesService.getDetails({
            reference: locationChosen.reference
            }, 
            (place, status) => {

                var terms = locationChosen.terms;
                console.log(terms);

                var locData = {
                    name: terms[0].value,
                    description: locationChosen.description,
                    city: terms[terms.length - 2].value,
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                };

                this.$scope.modal.locationChosen = locData;
                this.$scope.modal.remove();
        });
    }

    private fetch(query) {

        this.googleMapsService.getPlacePredictions({
            input: query
        }, (predictions, status) => {

            this.fetchCallback(predictions, status);
        });

    };

    private fetchCallback(predictions, status) {

        if (status !== google.maps.places.PlacesServiceStatus.OK) {

            this.results = [];
            return;

        } else {

            this.results = predictions;
        }
    }

    private inputChange(query) {

        if (query && query.length >= 3) {

            this.fetch(query);

        } else {
            this.results = [];
        }

    }

}

angular.module('thingsToDo')
    .controller('thingsToDo.LocationPickerController', LocationPickerController);


    } // ThingsToDo
} // RailTech
