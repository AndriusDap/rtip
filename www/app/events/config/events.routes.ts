"use strict";

module RailTech {
export module Events {

angular.module('ticketing')
    .config(function($stateProvider) {

        $stateProvider
            .state('app.events', {
                url: '/events',
                abstract: true,
                template: "<ion-nav-view>"
            })

            .state('app.events.overview', {
                url: '/overview',
                templateUrl: 'app/events/overview/overview.html',
                controller: 'OverviewController as $ctrl'
            });
    });
}
}