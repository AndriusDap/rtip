'use strict';

module RailTech {
export module StaffRepay {

class ClaimFormController {

    public claim;
    public ticket;
	public journey;
    public journeysFound;
    public journeySelected;

    public static $inject = [
        "JourneyService",
        "ClaimService",
        "$ionicLoading"];

    constructor(
        private journeyService: JourneyService,
        private claimService: ClaimService,
        private $ionicLoading) {

    	this.journey = {};
    	this.journey.journeyDate = new Date(2016,2,26,14,3);
    	this.journey.delayLength = 28;
        this.journey.fromStation = "London Euston";
        this.journey.toStation = "Manchester Picadilli";

        this.claim = {};
        this.claim.id = 1231412;
        this.claim.from = "London Euston";
        this.claim.to = "Manchester Picadilli";
        this.claim.date = (new Date()).toISOString();
        this.claim.status = "OUTSTANDING";

        this.ticket = {};
        this.ticket.identification = 727182
        this.ticket.cost = 82.40;
        this.ticket.class = "Standard";
        this.ticket.type = "Off-peak Return";
        this.ticket.fromDate = new Date(2016,2,26);
        this.ticket.toDate = new Date(2016,2,26);
        this.ticket.ticketImage = "img/ticket.jpg";

        this.search();
    }

    search() {
        this.$ionicLoading.show({
            template: "Loading journeys..."
        });

        this.journeysFound = [];

        this.journeyService.search(
                this.journey.fromStation,
                this.journey.toStation,
                this.journey.journeyDate)
            .then((results) => {
                this.journeysFound = results;
            })
            .finally(() => {
                this.$ionicLoading.hide();
            });
    }

    calculateRepay() {
        if(!this.journeySelected) return;

        var delay = this.journeySelected.delay;
        var cost = this.claimService.ticket.cost;
        var ticketType = this.claimService.ticket.type.toLowerCase();
        var refund = 0;

        console.log(ticketType);
        if(delay > 120) {
            refund = this.claimService.ticket.cost;
        }
        else if(delay > 60) {
            if(ticketType.indexOf("return") > -1) {
                refund = cost / 2;
            }
            else if (ticketType.indexOf("single") > -1) {
                refund = cost;
            }
            else {
                refund = cost;
            }
        }
        else if (delay > 30) {
            if(ticketType.indexOf("return") > -1) {
                refund = cost / 4;
            }
            else if (ticketType.indexOf("single") > -1) {
                refund = cost / 2;
            }
            else {
                refund = cost;
            }
        }

        return refund;
    }

    public verifyInputs(): boolean {
        return this.journeySelected;
    }

}

angular.module('staffrepay')
    .controller('staffrepay.ClaimFormController', ClaimFormController)


} // Repay
} // RailTech
