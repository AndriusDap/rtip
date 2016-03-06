
module RailTech {
export module Events {

export class EventsService {

    static $inject = ["$q"];

    constructor(private $q) {
        
    }
}

angular.module('events')
    .service('EventsService', EventsService)


} // Events
} // RailTech