"use strict";

module RailTech {
export module Repay {

angular.module('repay')
    .config(function($stateProvider) {

        $stateProvider
            .state('app.repay', {
                url: '/repay',
                abstract: true,
                template: "<ion-nav-view>"
            })

            .state('app.repay.overview', {
                url: '/overview',
                templateUrl: 'app/repay/overview/overview.html',
            })

            .state('app.repay.claim', {
                url: '/claim',
                templateUrl: 'app/repay/claim/claim.html',
                controller: 'repay.ClaimController as $ctrl'
            });
    });
}
}