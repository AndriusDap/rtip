'use strict';

module RailTech {
export module Repay {

export class ClaimController {

    public titleOptions = ["Mr.", "Mrs.", "Miss.", "Mr. & Mrs.", "Ms.", "Dr.", "Professor", "Other"];
    public ticketTypeOptions = ["Off-peak Day Single", "Off-peak Day Return", "Off-peak Return", "Off-peak Single", "Anytime Single", "Anytime Return", "Advance Single", "Anytime Day Single", "Anytime Day Return", "Annual Season Ticket", "Season Ticket"];

    public ticketImage64: string;

    public static $inject = [
        '$scope',
        '$ionicLoading',
        'TicketService',
        '$cordovaCamera'];

    constructor(
            private $scope,
            private $ionicLoading,
            private ticketService,
            $cordovaCamera) {

        $scope.$parent.showHeader();
        $scope.$parent.setExpanded(true);

        this.ticketService.takePicture()
            .then((result) => {
                    
                    this.ticketImage64 = result;

                    this.$ionicLoading.show({
                        template: 'Extracting text from ticket...'
                    });

                    return this.ticketService.extractTextFromImage64(this.ticketImage64);
                })
            .then((result) => {


                this.$ionicLoading.hide();
            });
    }

}

angular.module('repay')
    .controller('ClaimController', ClaimController)


} // Repay
} // RailTech
