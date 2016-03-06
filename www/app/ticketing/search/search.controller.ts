'use strict';

module RailTech {
export module Ticketing {

export class SearchController {

    public departDate: Date;
    public returnDate: Date;
    public toStationSearch: string;
    public toStation: string;
    public fromStationSearch: string;
    public fromStation: string;
    public passengerNumber: number;

    public static $inject = [
        '$state',
        'TicketingService',
        '$scope',
        '$ionicPopup',
        '$timeout'];

    constructor(
            private $state,
            private ticketingService: TicketingService,
            private $scope,
            private $ionicPopup, 
            private $timeout) {

        $scope.$parent.showHeader();
        $scope.$parent.setExpanded(true);
    }

    public fromQuerySearch(query) {
        var results = query ? 
            stations.filter( this.createFilterFor(query) ) : 
            stations;

        return results;
    }

    public findResults() {
        this.ticketingService.fromStation = this.fromStation ? this.fromStation.display : null;
        this.ticketingService.toStation = this.toStation? this.toStation.display : null;
        this.ticketingService.fromDate = this.fromDate;
        this.ticketingService.returnDate = this.returnDate;
        this.ticketingService.passengers = this.passengerNumber;

        if(!this.ticketingService.validParameters()) {
            this.showErrorPopup();
            return;
        }

        this.$state.go('app.ticketing.results');
    }

    private showErrorPopup() {
        var myPopup = this.$ionicPopup.show({
            template: 'The data you entered is not fully valid, please check your input and try again.',
            title: 'Wrong fields',
            scope: this.$scope,
            buttons: [
              {
                text: '<b>Ok</b>',
                type: 'button-positive',
                onTap: function(e) {
                  myPopup.close();
                }
              }
          });

          this.$timeout(function() {
             myPopup.close(); //close the popup after 3 seconds for some reason
          }, 3000);
    }

    private createFilterFor(query): (state: SearchStation) => boolean {
        var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                var lowercaseDisplay = angular.lowercase(state.display);
                return (lowercaseDisplay.search(lowercaseQuery) >= 0);
        };
    }
}

angular.module('ticketing')
    .controller('SearchController', SearchController)


} // Ticketing
} // RailTech
