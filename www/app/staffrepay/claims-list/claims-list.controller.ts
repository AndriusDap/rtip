'use strict';

module RailTech {
export module StaffRepay {

class ClaimsListController {

	public claims;
	
	private pageNumber;
	private limit;

    public static $inject = [
    	"ClaimService"];

    constructor(private claimService: ClaimService) {
    	this.refreshClaims("OUTSTANDING");
    }

    refreshClaims(claimStatus) {
    	this.claimService.getClaims()
    		.then((results) => {
    			this.claims = results;
    		});
    }

}

angular.module('staffrepay')
    .controller('staffrepay.ClaimsListController', ClaimsListController)


} // Repay
} // RailTech
