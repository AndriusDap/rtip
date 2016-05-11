
module RailTech {
export module StaffRepay {

export class ClaimService {

    public ticket;
    public journey;

    static $inject = [
        "$http",
        "$q",
        "$timeout"];

    constructor(
            private $http,
            private $q,
            private $timeout) {

    }

    public getClaims(claimStatus, pageNumber, limit) {
        var deferred = this.$q.defer();

        this.$http.get("/api/ticket/delayClaim")
            .then((response) => {

                deferred.resolve(response.data);
            });            

        return deferred.promise;
    }

    public getClaim(id) {
        var deferred = this.$q.defer();

        var params = {
            params: { id: id }
        };

        this.$http.get("/api/ticket/delayClaim", params)
            .then((response) => {

                var ticketResponse = response.data[0].journey;
                var img64bits = ticketResponse.image_64.split(",");

                var img64 = img64bits[0];

                if (img64bits.length > 1) {
                    img64 = img64bits[1];
                }

                console.log(response);

                var ticket = {
                    fromStation: ticketResponse.from_station,
                    toStation: ticketResponse.to_station,
                    class: ticketResponse.ticket_class,
                    type: ticketResponse.ticket_type,
                    fromDate: ticketResponse.from_date,
                    toDate: ticketResponse.to_date,
                    cost: ticketResponse.cost,
                    journeyDate: ticketResponse.journey_date,
                    image64: img64
                };

                deferred.resolve(ticket);
            });

        return deferred.promise;
    }

}

angular.module('staffrepay')
    .service('ClaimService', ClaimService)


} // Ticketing
} // RailTech