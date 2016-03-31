"use strict";

module RailTech {
export module StaffRepay {

angular.module('staffrepay')
    .config(function($stateProvider) {

        $stateProvider
            .state('app.staffrepay', {
                url: '/staffrepay',
                abstract: true,
                template: "<ion-nav-view>"
            })

            .state('app.staffrepay.overview', {
                url: '/overview',
                templateUrl: 'app/staffrepay/overview/overview.html',
                controller: "OverviewController as $ctrl"
            })

            .state('app.staffrepay.claimsList', {
                url: '/claimsList',
                templateUrl: 'app/staffrepay/claims-list/claims-list.html',
                controller: 'ClaimsListController as $ctrl'
            })

            .state('app.staffrepay.verifyClaim', {
                url: '/verifyClaim',
                abstract: true,
                templateUrl: 'app/staffrepay/verify-claim/verify-claim.html',
                controller: 'VerifyClaimController as $ctrl'
            })
            .state('app.staffrepay.verifyClaim.ticket', {
                url: '/ticket',
                templateUrl: 'app/staffrepay/verify-claim/ticket-form/ticket-form.html',
                controller: 'TicketFormController as $ctrl'
            })
            .state('app.staffrepay.verifyClaim.claim', {
                url: '/claim',
                templateUrl: 'app/staffrepay/verify-claim/claim-form/claim-form.html',
                controller: 'ClaimFormController as $ctrl'
            })
            .state('app.staffrepay.verifyClaim.contact', {
                url: '/contact',
                templateUrl: 'app/staffrepay/verify-claim/contact-form/contact-form.html',
                controller: 'ContactFormController as $ctrl'
            })
            .state('app.staffrepay.verifyClaim.success', {
                url: '/success',
                templateUrl: 'app/staffrepay/verify-claim/successful-claim/successful-claim.html'
            });
    });
}
}