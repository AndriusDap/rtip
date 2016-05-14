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
        "$ionicLoading",
        "$stateParams"];

    constructor(
            private journeyService: JourneyService,
            private claimService: ClaimService,
            private $ionicLoading,
            private $stateParams) {

        this.claimId = $stateParams.claimId;

        var params = {
            id: this.claimId
        };

        this.$ionicLoading.show({
            template: "Loading claim..."
        });

        this.claimService.getClaim(params)
            .then((delayClaim) => {

                this.ticket = delayClaim.ticket;
                this.journey = delayClaim.journey;

                return this.$ionicLoading.hide();
            })
            .then(() => {
                this.search();
            });
    }

    search() {
        this.$ionicLoading.show({
            template: "Loading journeys..."
        });

        this.journeysFound = [];

        return this.journeyService.search(
                this.ticket.fromStation,
                this.ticket.toStation,
                this.ticket.journeyDate)

            .then((results) => {

                this.journeysFound = results;

                return this.$ionicLoading.hide();
            });
    }

    calculateRepay() {
        
        if(!this.journeySelected) return;

        var delay = this.journeySelected.delay;
        var cost = this.ticket.cost;
        var ticketType = this.ticket.type.toLowerCase();
        var refund = 0;

        if(delay > 120) {
            refund = this.ticket.cost;
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
