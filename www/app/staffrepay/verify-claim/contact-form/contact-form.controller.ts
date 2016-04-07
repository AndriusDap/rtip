'use strict';

module RailTech {
export module StaffRepay {

class ContactFormController {

    public user;
    public titleOptions = ["Mr.", "Mrs.", "Miss.", "Mr. & Mrs.", "Ms.", "Dr.", "Professor", "Other"];

    public static $inject = [];

    constructor() {

    	this.user = {};
    	this.user.title = "Mr.";
    	this.user.firstName = "Alejandro";
    	this.user.lastName = "Saucedo";
    	this.user.email = "alejandro@hackpartners.com";
    	this.user.phone = "07926925347";
    	this.user.postCode = "N1 9PR";
    	this.user.compensation = "Bank";

    }

}

angular.module('staffrepay')
    .controller('staffrepay.ContactFormController', ContactFormController)


} // Repay
} // RailTech
