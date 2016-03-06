
module RailTech {
export module Ticketing {

export class TicketingService {

    public fromStation: string;
    public toStation: string;
    public fromDate: Date;
    public returnDate: Date;
    public passengers: number;

    static $inject = ["$q"];

    constructor(private $q) {
        
    }

    public validParameters() {
        return this.fromStation &&
                this.toStation &&
                this.fromDate &&
                this.passengers;
    }

    public getJourneysTowards() {
        var deferred = this.$q.defer();

        var journeys: Journey[] = [
            new Journey(
                new Date(2016,3,5,18,50),
                new Date(2016,3,5,20,10),
                "1h30m",
                "STANDARD",
                81.40),
            new Journey(
                new Date(2016,3,5,18,50),
                new Date(2016,3,5,20,30),
                "1h45m",
                "STANDARD",
                203.50),
            new Journey(
                new Date(2016,3,5,18,50),
                new Date(2016,3,5,20,50),
                "2h13m",
                "STANDARD",
                237.50)
        ];

        deferred.resolve(journeys);

        return deferred.promise;
    }

    public getJourneysReturn() {
        var deferred = this.$q.defer();

        var journeys: Journey[] = [
            new Journey(
                new Date(2016,3,5,18,50),
                new Date(2016,3,5,20,10),
                "1h30m",
                "STANDARD",
                81.40),
            new Journey(
                new Date(2016,3,5,18,50),
                new Date(2016,3,5,20,30),
                "1h45m",
                "STANDARD",
                203.50),
            new Journey(
                new Date(2016,3,5,18,50),
                new Date(2016,3,5,20,50),
                "2h13m",
                "STANDARD",
                237.50)
        ];

        deferred.resolve(journeys);

        return deferred.promise;
    }

}

angular.module('ticketing')
    .service('TicketingService', TicketingService)


} // Ticketing
} // RailTech