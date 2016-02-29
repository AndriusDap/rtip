"use strict";
var RailTech;
(function (RailTech) {
    var TicketingComponent = (function () {
        function TicketingComponent() {
            this.controller = TicketingController;
            this.templateUrl = "";
            this.bindings = {};
        }
        return TicketingComponent;
    }());
    angular.module('ticketing')
        .component('TicketingComponent', new TicketingComponent());
})(RailTech || (RailTech = {}));
