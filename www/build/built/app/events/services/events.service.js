var RailTech;
(function (RailTech) {
    var Events;
    (function (Events) {
        var EventsService = (function () {
            function EventsService($q) {
                this.$q = $q;
            }
            EventsService.$inject = ["$q"];
            return EventsService;
        }());
        Events.EventsService = EventsService;
        angular.module('events')
            .service('EventsService', EventsService);
    })(Events = RailTech.Events || (RailTech.Events = {})); // Events
})(RailTech || (RailTech = {})); // RailTech
