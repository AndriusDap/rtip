'use strict';

module RailTech {
export module Repay {

export class ClaimController {

    public titleOptions = ["Mr.", "Mrs.", "Miss.", "Mr. & Mrs.", "Ms.", "Dr.", "Professor", "Other"];
    public ticketTypeOptions = ["off-peak day single", "off-peak day return", "off-peak return", "off-peak single", "anytime single", "anytime return", "advance single", "anytime day single", "anytime day return", "annual season ticket", "season ticket"];

    private ocrService;

    public ticketImage64: string;

    public ticket;
    public journey;
    public user;

    public formStatusVisible;

    public static $inject = [
        '$ionicLoading',
        'repay.ticketDelayService'
        'repay.ocrService',
        '$timeout'];

    constructor(
            private $ionicLoading,
            private ticketDelayService,
            private ocrService,
            private $timeout) {

        this.ticket = {};

        this.formStatusVisible = false ;
    }

    public captureTicket() {

        this.ticketDelayService.captureTicket()
            .then((ticketImage64) => {
                this.ticketImage64 = ticketImage64;
                this.ocr(ticketImage64);
            });
    }

    public clearForm() {

        this.ticket.fromStation = null;
        this.ticket.toStation = null;
        this.ticket.type = null;
        this.ticket.fromDate = null;
        this.ticket.toDate = null;
        this.journey.journeyDate = null;
        this.journey.delayLength = null;
        this.journey.cost = null;
        this.user.title = null;
        this.user.firstName = null;
        this.user.lastName = null;
        this.user.postCode = null;
        this.user.address = null;
        this.user.email = null;
    }

    public uploadClaim() {
        this.ticketDelayService.uploadClaim(
                this.ticketImage64, 
                this.ticket, 
                this.journey, 
                this.user)
            .then(
                ()=>{

                    this.clearForm();

                    this.formStatusVisible = true;

                    this.$timeout(() => {
                        
                        this.formStatusVisible = false;

                    }, 3000);
                }
                , ()=> {
                    //redirect to error
                }
            );
    }

    public claimFormValid() {
        return !(this.ticket.fromStation
            && this.ticket.toStation
            && this.ticket.type
            && this.ticket.fromDate
            && this.ticket.toDate
            && this.journey.journeyDate
            && this.journey.delayLength
            && this.journey.cost
            && this.user.title
            && this.user.firstName
            && this.user.lastName
            && this.user.postCode
            && this.user.address
            && this.user.email);
    }

    ocr(imgBlob) {

        this.ocrService.scanImage(imgBlob)
            .then((ticket) => {

                console.log(ticket);
                if (!this.ticket.fromStation) {
                    this.ticket.fromStation = ticket.fromStation;
                }
                if (!this.ticket.toStation) {
                    this.ticket.toStation = ticket.toStation;
                }
                if (!this.ticket.class) {
                    this.ticket.class = ticket.class;
                }
                if (!this.ticket.ticketType) {
                    this.ticket.ticketType = ticket.ticketType;
                }
                if (!this.ticket.ticketType) {
                    this.ticket.ticketType = ticket.ticketType;
                }
                if (!this.ticket.ticketClass) {
                    this.ticket.fromDate = ticket.fromDate;
                }

            })
            .catch(function() {
                
                alert('Could not read ticket...');
            });
    }

}

angular.module('repay')
    .controller('repay.ClaimController', ClaimController)
    .directive('appFilereader', function($q) {
        var slice = Array.prototype.slice;

        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, element, attrs, ngModel) {
                if (!ngModel) return;

                ngModel.$render = function() { };

                element.bind('change', function(e) {
                    var element = e.target;

                    $q.all(slice.call(element.files, 0).map(readFile))
                        .then(function(values) {
                            if (element.multiple) ngModel.$setViewValue(values);
                            else ngModel.$setViewValue(values.length ? values[0] : null);
                        });

                    function readFile(file) {
                        var deferred = $q.defer();

                        var reader = new FileReader();
                        reader.onload = function(e) {
                            deferred.resolve(e.target.result);
                        };
                        reader.onerror = function(e) {
                            deferred.reject(e);
                        };
                        reader.readAsDataURL(file);

                        return deferred.promise;
                    }

                }); //change

            } //link
        }; //return
    });


} // Repay
} // RailTech
