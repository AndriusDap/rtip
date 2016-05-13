'use strict';

module RailTech {
export module StaffRepay {

class TicketFormController {

    public titleOptions = ["Mr.", "Mrs.", "Miss.", "Mr. & Mrs.", "Ms.", "Dr.", "Professor", "Other"];
    public ticketTypeOptions = ["off-peak day single", "off-peak day return", "off-peak return", "off-peak single", "anytime single", "anytime return", "advance single", "anytime day single", "anytime day return", "annual season ticket", "season ticket"];

    public ticketImage64: string;
    public ticket;
    public verifications;

    public duplicateIdentification;

    private claimId;

    public static $inject = [
        "ClaimService",
        "$ionicLoading",
        "$stateParams",
        "$state",
        "$ionicPopup"];

    constructor(
            private claimService: ClaimService,
            private $ionicLoading,
            private $stateParams,
            private $state,
            private $ionicPopup) {
        
        this.$ionicLoading.show({
            template: "Loading claim..."
        });

        this.verifications = {};
        this.ticket = {};
        this.claimId = $stateParams.claimId;

        this.duplicateIdentification = false;

        var params = {
            id: this.claimId
        }

        this.claimService.getClaim(params)
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

                this.$ionicLoading.hide();

                console.log(this.ticket);

            })
            .finally(() => {

                this.$ionicLoading.hide();
            });
    }

    public verifyInputs(): boolean {
        return this.verifications.identification === true &&
                this.verifications.cost === true &&
                this.verifications.ticketClass === true &&
                this.verifications.type === true &&
                this.verifications.fromDate === true &&
                this.verifications.toDate === true;

    }

    public verifyIdentification(identification) {

        var params = {
            identification: identification
        };

        this.claimService.getClaim(params)
            .then((ticket) => {
                
                if(!ticket) {
                    this.duplicateIdentification = false;
                }
                else {
                    this.duplicateIdentification = true;
                }

            });
    }

    public submitTicket() {

        this.claimService.updateTicket(this.claimId, this.ticket)
            .then((response) => {

                var status = response.status;

                if(status === "SUCCESS") {
                    if(this.duplicateIdentification) {
                        this.$state.go("app.staffrepay.success");
                    }
                    else {
                        this.$state.go("app.staffrepay.claim", { "claimId": this.claimId });
                    }
                }
                else {
                    $ionicPopup.alert({
                        title: 'Error',
                        template: 'There has been an error. Please contact the technical team.'
                    });
                }
            });

    }

}

angular.module('staffrepay')
    .controller('staffrepay.TicketFormController', TicketFormController);


} // Repay
} // RailTech
