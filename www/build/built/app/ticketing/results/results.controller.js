'use strict';
var RailTech;
(function (RailTech) {
    var Ticketing;
    (function (Ticketing) {
        var ResultsController = (function () {
            function ResultsController($scope, ticketingService, ionicMaterialMotion, ionicMaterialInk) {
                var _this = this;
                this.ticketingService = ticketingService;
                this.ionicMaterialMotion = ionicMaterialMotion;
                ionicMaterialMotion.fadeSlideInRight();
                ionicMaterialInk.displayEffect();
                this.fromStation = ticketingService.fromStation;
                this.toStation = ticketingService.toStation;
                console.log(this.fromStation, ticketingService.fromStation, this.toStation, ticketingService.toStation);
                ticketingService.getJourneysTowards().then(function (journeys) {
                    _this.journeysTowards = journeys;
                    _this.ionicMaterialMotion.fadeSlideInRight();
                    console.log(journeys);
                });
                this.isReturnTrip = ticketingService.returnDate !== undefined && ticketingService.returnDate !== null;
                if (this.isReturnTrip) {
                    ticketingService.getJourneysReturn().then(function (journeys) {
                        _this.journeysReturn = journeys;
                        _this.ionicMaterialMotion.fadeSlideInRight();
                    });
                }
            }
            ResultsController.$inject = [
                '$scope',
                'TicketingService',
                'ionicMaterialMotion',
                'ionicMaterialInk'];
            return ResultsController;
        }());
        Ticketing.ResultsController = ResultsController;
        angular.module('ticketing')
            .controller('ResultsController', ResultsController);
    })(Ticketing = RailTech.Ticketing || (RailTech.Ticketing = {})); // Ticketing
})(RailTech || (RailTech = {})); // RailTech
