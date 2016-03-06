'use strict';

module RailTech {
export module Ticketing {

export class ResultsController {

    private fromStation: string;
    private toStation: string;
    private isReturnTrip: boolean;
    private journeysTowards: Journey[];
    private journeysReturn: Journey[];

    public static $inject = [
        '$scope', 
        'TicketingService',
        'ionicMaterialMotion',
        'ionicMaterialInk'];

    constructor(
            $scope,
            private ticketingService: TicketingService,
            private ionicMaterialMotion,
            ionicMaterialInk) {

        ionicMaterialMotion.fadeSlideInRight();
        ionicMaterialInk.displayEffect();

        this.fromStation = ticketingService.fromStation;
        this.toStation = ticketingService.toStation;

        console.log(this.fromStation, ticketingService.fromStation,
        this.toStation, ticketingService.toStation);

        ticketingService.getJourneysTowards().then((journeys) => {
            this.journeysTowards = journeys;
            this.ionicMaterialMotion.fadeSlideInRight();
            console.log(journeys);
        });

        this.isReturnTrip = ticketingService.returnDate !== undefined && ticketingService.returnDate !== null;

        if(this.isReturnTrip) {
            ticketingService.getJourneysReturn().then((journeys) => {
                this.journeysReturn = journeys;
                this.ionicMaterialMotion.fadeSlideInRight();
            });
        }
    }
}

angular.module('ticketing')
    .controller('ResultsController', ResultsController)


} // Ticketing
} // RailTech
