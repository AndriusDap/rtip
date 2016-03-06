'use strict';
var RailTech;
(function (RailTech) {
    var Ticketing;
    (function (Ticketing) {
        var SearchController = (function () {
            function SearchController($state, ticketingService, $scope, $ionicPopup, $timeout) {
                this.$state = $state;
                this.ticketingService = ticketingService;
                this.$scope = $scope;
                this.$ionicPopup = $ionicPopup;
                this.$timeout = $timeout;
                $scope.$parent.showHeader();
                $scope.$parent.setExpanded(true);
            }
            SearchController.prototype.fromQuerySearch = function (query) {
                var results = query ?
                    RailTech.stations.filter(this.createFilterFor(query)) :
                    RailTech.stations;
                return results;
            };
            SearchController.prototype.findResults = function () {
                this.ticketingService.fromStation = this.fromStation ? this.fromStation.display : null;
                this.ticketingService.toStation = this.toStation ? this.toStation.display : null;
                this.ticketingService.fromDate = this.fromDate;
                this.ticketingService.returnDate = this.returnDate;
                this.ticketingService.passengers = this.passengerNumber;
                if (!this.ticketingService.validParameters()) {
                    this.showErrorPopup();
                    return;
                }
                this.$state.go('app.ticketing.results');
            };
            SearchController.prototype.showErrorPopup = function () {
                var myPopup = this.$ionicPopup.show({
                    template: 'The data you entered is not fully valid, please check your input and try again.',
                    title: 'Wrong fields',
                    scope: this.$scope,
                    buttons: [
                        {
                            text: '<b>Ok</b>',
                            type: 'button-positive',
                            onTap: function (e) {
                                myPopup.close();
                            }
                        }]
                });
                this.$timeout(function () {
                    myPopup.close(); //close the popup after 3 seconds for some reason
                }, 3000);
            };
            SearchController.prototype.createFilterFor = function (query) {
                var lowercaseQuery = angular.lowercase(query);
                return function filterFn(state) {
                    var lowercaseDisplay = angular.lowercase(state.display);
                    return (lowercaseDisplay.search(lowercaseQuery) >= 0);
                };
            };
            SearchController.$inject = [
                '$state',
                'TicketingService',
                '$scope',
                '$ionicPopup',
                '$timeout'];
            return SearchController;
        }());
        Ticketing.SearchController = SearchController;
        angular.module('ticketing')
            .controller('SearchController', SearchController);
    })(Ticketing = RailTech.Ticketing || (RailTech.Ticketing = {})); // Ticketing
})(RailTech || (RailTech = {})); // RailTech
