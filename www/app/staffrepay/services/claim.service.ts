
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

        this.$http.get("http://localhost:3000/delayClaim")
            .then((response) => {

                deferred.resolve(response.data);
            });            

        return deferred.promise;
    }

    public getClaim(params) {
        var deferred = this.$q.defer();

        this.$http.get("http://localhost:3000/delayClaim", { params: params })
            .then((response) => {

                if (response.data.length === 0) {
                    return null;
                }
                
                var ticketResponse = response.data[0].journey;
                var img64bits = ticketResponse.image_64.split(",");

                var img64 = img64bits[0];

                if (img64bits.length > 1) {
                    img64 = img64bits[1];
                }

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

    public updateTicket(claimId, ticket) {

        var deferred = this.$q.defer();

        var ticketRequest = {
            claimId: claimId,
            identification: ticket.identification,
            ticket_class: ticket.class,
            ticket_type: ticket.type,
            from_date: ticket.fromDate,
            to_date: ticket.toDate,
            cost: ticket.cost
        };

        this.$http.post("http://localhost:3000/delayClaim", ticketRequest)
            .then((response) => {

                var data = response.data;

                deferred.resolve(data);
            });
        
        return deferred.promise;
    }
}

angular.module('staffrepay')
    .service('ClaimService', ClaimService)


} // Ticketing
} // RailTech