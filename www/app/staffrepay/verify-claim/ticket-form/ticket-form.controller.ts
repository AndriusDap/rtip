'use strict';

module RailTech {
export module StaffRepay {

class TicketFormController {

    public titleOptions = ["Mr.", "Mrs.", "Miss.", "Mr. & Mrs.", "Ms.", "Dr.", "Professor", "Other"];
    public ticketTypeOptions = ["Off-peak Day Single", "Off-peak Day Return", "Off-peak Return", "Off-peak Single", "Anytime Single", "Anytime Return", "Advance Single", "Anytime Day Single", "Anytime Day Return", "Annual Season Ticket", "Season Ticket"];

    public ticketImage64: string;
    public ticket;
    public verifications;

    private ticketId;

    public static $inject = [
        "ClaimService",
        "$ionicLoading",
        "$stateParams"];

    constructor(
            private claimService: ClaimService,
            private $ionicLoading,
            private $stateParams) {
        
        this.$ionicLoading.show({
            template: "Loading claim..."
        });

        this.verifications = {};
        this.ticket = {};
        this.ticketId = $stateParams.id;

        this.claimService.getClaim(this.ticketId)
            .then((ticket) => {

                this.ticket.fromStation = ticket.fromStation;
                this.ticket.toStation = ticket.toStation;
                this.ticket.class = ticket.class;
                this.ticket.type = ticket.type;
                this.ticket.fromDate = ticket.fromDate;
                this.ticket.toDate = ticket.toDate;
                this.ticket.cost = ticket.cost;
                this.ticket.journeyDate = ticket.journeyDate;

                this.ticketImage64 = ticket.image64;

                console.log(this);

                this.$ionicLoading.hide();

            })
            .finally(() => {

                this.$ionicLoading.hide();
            });
    }

    public verifyInputs(): boolean {
        return this.verifications.identification === true &&
                this.verifications.cost === true &&
                this.verifications.ticketClass === true &&
                this.verifications.ticketType === true &&
                this.verifications.fromDate === true &&
                this.verifications.toDate === true;

    }

}

angular.module('staffrepay')
    .controller('staffrepay.TicketFormController', TicketFormController);


} // Repay
} // RailTech
