'use strict';

module RailTech {
export module Repay {

export class ClaimController {

    public titleOptions = ["Mr.", "Mrs.", "Miss.", "Mr. & Mrs.", "Ms.", "Dr.", "Professor", "Other"];
    public ticketTypeOptions = ["Off-peak Day Single", "Off-peak Day Return", "Off-peak Return", "Off-peak Single", "Anytime Single", "Anytime Return", "Advance Single", "Anytime Day Single", "Anytime Day Return", "Annual Season Ticket", "Season Ticket"];

    private ocrService;

    public ticketImage64: string;

    public ticket;
    public journey;
    public user;

    public static $inject = [
        '$ionicLoading',
        'repay.ticketDelayService'
        'repay.ocrService'];

    constructor(
            private $ionicLoading,
            private ticketDelayService
            private ocrService) {

        this.ticket = {};
    }

    captureTicket() {
        this.ticketDelayService.captureTicket()
            .then((ticketImage64) => {
                this.ticketImage64 = ticketImage64;
                this.ocr(ticketImage64);
            });
    }

    uploadClaim() {
        this.ticketDelayService.uploadClaim(
                this.ticketImage64, 
                this.ticket, 
                this.journey, 
                this.user)
            .then(
                ()=>{
                    // Redirect to success
                }
                , ()=> {
                    //redirect to error
                }
            );
    }

    ocr(imgBlob) {
        this.ocrService.scanImage(imgBlob)
            .then(function(response) {

                this.$ionicLoading.hide();
            })
            .catch(function() {
                
                alert('Could not read ticket...');
                this.$ionicLoading.hide();
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
