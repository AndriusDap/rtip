"use strict";

module RailTech {

class TicketingComponent implements ng.IComponentOptions {

    public controller = TicketingController;
    public templateUrl = "";
    public bindings = {

    };
}

angular.module('ticketing')
    .component('TicketingComponent', new TicketingComponent());
}