'use strict';

module RailTech {
export module StaffRepay {

class VerifyClaimController {
    
    public static $inject = [
    	"ClaimService"
    ];

    constructor(
    		private claimService: ClaimService) {

    }

}

angular.module('staffrepay')
    .controller('staffrepay.VerifyClaimController', VerifyClaimController)


} // Repay
} // RailTech
