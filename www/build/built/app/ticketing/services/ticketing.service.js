var RailTech;
(function (RailTech) {
    var Ticketing;
    (function (Ticketing) {
        var TicketingService = (function () {
            function TicketingService($q) {
                this.$q = $q;
            }
            TicketingService.prototype.validParameters = function () {
                return this.fromStation &&
                    this.toStation &&
                    this.fromDate &&
                    this.passengers;
            };
            TicketingService.prototype.getJourneysTowards = function () {
                var deferred = this.$q.defer();
                var journeys = [
                    new Ticketing.Journey(new Date(2016, 3, 5, 18, 50), new Date(2016, 3, 5, 20, 10), "1h30m", "STANDARD", 81.40),
                    new Ticketing.Journey(new Date(2016, 3, 5, 18, 50), new Date(2016, 3, 5, 20, 30), "1h45m", "STANDARD", 203.50),
                    new Ticketing.Journey(new Date(2016, 3, 5, 18, 50), new Date(2016, 3, 5, 20, 50), "2h13m", "STANDARD", 237.50)
                ];
                deferred.resolve(journeys);
                return deferred.promise;
            };
            TicketingService.prototype.getJourneysReturn = function () {
                var deferred = this.$q.defer();
                var journeys = [
                    new Ticketing.Journey(new Date(2016, 3, 5, 18, 50), new Date(2016, 3, 5, 20, 10), "1h30m", "STANDARD", 81.40),
                    new Ticketing.Journey(new Date(2016, 3, 5, 18, 50), new Date(2016, 3, 5, 20, 30), "1h45m", "STANDARD", 203.50),
                    new Ticketing.Journey(new Date(2016, 3, 5, 18, 50), new Date(2016, 3, 5, 20, 50), "2h13m", "STANDARD", 237.50)
                ];
                deferred.resolve(journeys);
                return deferred.promise;
            };
            TicketingService.$inject = ["$q"];
            return TicketingService;
        }());
        Ticketing.TicketingService = TicketingService;
        angular.module('ticketing')
            .service('TicketingService', TicketingService);
    })(Ticketing = RailTech.Ticketing || (RailTech.Ticketing = {})); // Ticketing
})(RailTech || (RailTech = {})); // RailTech
