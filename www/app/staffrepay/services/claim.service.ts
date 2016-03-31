
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

    getClaims() {

    }

    loadClaim(id) {
        var deferred = this.$q.defer();

        this.$timeout(() => {
            this.ticket = {};
            this.ticket.identification = 727182
            this.ticket.cost = 82.40;
            this.ticket.class = "Standard";
            this.ticket.type = "Off-peak Return";
            this.ticket.fromDate = new Date(2016,2,26);
            this.ticket.toDate = new Date(2016,2,26);

            deferred.resolve();
        }, 2000);

        return deferred.promise;
    }

}

angular.module('staffrepay')
    .service('ClaimService', ClaimService)


} // Ticketing
} // RailTech