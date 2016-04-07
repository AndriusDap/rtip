
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

        this.$timeout(() => {
            var today = new Date();

            var claims = [
                {
                    id: 1231412,
                    from: "London Euston",
                    to: "Manchester Picadilly",
                    date: today.toISOString(),
                    status: "OUTSTANDING"
                },
                {
                    id: 1241233,
                    from: "London Paddington",
                    to: "Oxford",
                    date: today.toISOString(),
                    status: "OUTSTANDING"
                },
                {
                    id: 1234125,
                    from: "London Euston",
                    to: "Manchester Picadilly",
                    date: today.toISOString(),
                    status: "OUTSTANDING"
                },
                {
                    id: 3456345,
                    from: "London Euston",
                    to: "Manchester Picadilly",
                    date: today.toISOString(),
                    status: "OUTSTANDING"
                },
                {
                    id: 5678567,
                    from: "London Euston",
                    to: "Manchester Picadilly",
                    date: today.toISOString(),
                    status: "FULFILLED"
                },
                {
                    id: 9876762,
                    from: "London Euston",
                    to: "Manchester Picadilly",
                    date: today.toISOString(),
                    status: "FULFILLED"
                },
                {
                    id: 2345234,
                    from: "London Euston",
                    to: "Manchester Picadilly",
                    date: today.toISOString(),
                    status: "FULFILLED"
                },
                {
                    id: 1623544,
                    from: "London Euston",
                    to: "Manchester Picadilly",
                    date: today.toISOString(),
                    status: "FULFILLED"
                },
                {
                    id: 7672543,
                    from: "London Euston",
                    to: "Manchester Picadilly",
                    date: today.toISOString(),
                    status: "FULFILLED"
                },
                {
                    id: 1373453,
                    from: "London Euston",
                    to: "Manchester Picadilly",
                    date: today.toISOString(),
                    status: "REJECTED"
                },
                {
                    id: 7372567,
                    from: "London Euston",
                    to: "Manchester Picadilly",
                    date: today.toISOString(),
                    status: "REJECTED"
                },
                {
                    id: 4436263,
                    from: "London Euston",
                    to: "Manchester Picadilly",
                    date: today.toISOString(),
                    status: "REJECTED"
                },
                {
                    id: 7234264,
                    from: "London Euston",
                    to: "Manchester Picadilly",
                    date: today.toISOString(),
                    status: "REJECTED"
                }
            ];

            deferred.resolve(claims);
        }, 1);

        return deferred.promise;
    }

    public loadClaim(id) {
        var deferred = this.$q.defer();

        this.$timeout(() => {
            this.ticket = {};
            this.ticket.identification = 727182
            this.ticket.cost = 82.40;
            this.ticket.class = "Standard";
            this.ticket.type = "Off-peak Return";
            this.ticket.fromDate = new Date(2016,2,26);
            this.ticket.toDate = new Date(2016,2,26);
            this.ticket.ticketImage = "img/ticket.jpg";

            deferred.resolve();
        }, 2000);

        return deferred.promise;
    }

}

angular.module('staffrepay')
    .service('ClaimService', ClaimService)


} // Ticketing
} // RailTech