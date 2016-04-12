"use strict";

module RailTech {
export module ThingsToDo {

angular.module('thingsToDo')
    .config(function($stateProvider) {

        $stateProvider
            .state('app.thingsToDo', {
                url: '/thingsToDo',
                abstract: true,
                template: "<ion-nav-view>"
            })

            .state('app.thingsToDo.overview', {
                url: '/overview',
                templateUrl: 'app/things-to-do/overview/overview.html',
                controller: "thingsToDo.OverviewController as $ctrl"
            })

            .state('app.thingsToDo.event', {
                url: '/event/:eventId',
                templateUrl: 'app/things-to-do/event/event.html',
                controller: "thingsToDo.EventController as $ctrl"
            });
    });
}
}