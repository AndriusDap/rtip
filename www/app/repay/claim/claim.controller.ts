'use strict';

module RailTech {
export module Repay {

export class ClaimController {

    public titleOptions = ["Mr.", "Mrs.", "Miss.", "Mr. & Mrs.", "Ms.", "Dr.", "Professor", "Other"];
    public ticketTypeOptions = ["Off-peak Day Single", "Off-peak Day Return", "Off-peak Return", "Off-peak Single", "Anytime Single", "Anytime Return", "Advance Single", "Anytime Day Single", "Anytime Day Return", "Annual Season Ticket", "Season Ticket"];

    public ticketImage64: string;

    public ticket;
    public journey;
    public user;

    public static $inject = [
        '$ionicLoading',
        'repay.ticketDelayService'];

    constructor(
            private $ionicLoading,
            private ticketDelayService) {

        this.ticket = {};

        this.ticketDelayService.captureTicket();
    }

    uploadClaim() {
        this.ticketDelayService.uploadClaim(this.ticket)
            .then(
                ()=>{
                    // Redirect to success
                }
                , ()=> {
                    //redirect to error
                }
            );
    }

}

angular.module('repay')
    .controller('repay.ClaimController', ClaimController)


} // Repay
} // RailTech
