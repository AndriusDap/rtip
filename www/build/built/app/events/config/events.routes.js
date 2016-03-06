"use strict";
var RailTech;
(function (RailTech) {
    var Events;
    (function (Events) {
        angular.module('ticketing')
            .config(function ($stateProvider) {
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
    })(Events = RailTech.Events || (RailTech.Events = {}));
})(RailTech || (RailTech = {}));
