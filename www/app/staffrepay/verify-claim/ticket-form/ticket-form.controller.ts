'use strict';

module RailTech {
export module StaffRepay {

class TicketFormController {

    public titleOptions = ["Mr.", "Mrs.", "Miss.", "Mr. & Mrs.", "Ms.", "Dr.", "Professor", "Other"];
    public ticketTypeOptions = ["Off-peak Day Single", "Off-peak Day Return", "Off-peak Return", "Off-peak Single", "Anytime Single", "Anytime Return", "Advance Single", "Anytime Day Single", "Anytime Day Return", "Annual Season Ticket", "Season Ticket"];

    public ticketImage64: string;

    public ticket;
    public verifications;

    public static $inject = [
        "ClaimService",
        "$ionicLoading"];

    constructor(
            private claimService: ClaimService,
            private $ionicLoading) {
        
        this.$ionicLoading.show({
            template: "Loading claim..."
        });

        this.verifications = {};

        this.claimService.loadClaim(1)
            .then(() => {
                this.ticket = this.claimService.ticket;
            })
            .finally(() => {
                this.$ionicLoading.hide();
            });
    }

    public verifyInputs() {
        console.log($ctrl.verifications);
        return $ctrl.verifications.identification &&
                $ctrl.verifications.cost &&
                $ctrl.verifications.class &&
                $ctrl.verifications.ticketType &&
                $ctrl.verifications.fromDate &&
                $ctrl.verifications.toDate;

    }

}

angular.module('staffrepay')
    .controller('TicketFormController', TicketFormController)


} // Repay
} // RailTech
