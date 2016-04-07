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
                controller: "staffrepay.OverviewController as $ctrl"
            })

            .state('app.staffrepay.claimsList', {
                url: '/claimsList',
                templateUrl: 'app/staffrepay/claims-list/claims-list.html',
                controller: 'staffrepay.ClaimsListController as $ctrl'
            })

            .state('app.staffrepay.ticket', {
                url: '/ticket',
                templateUrl: 'app/staffrepay/verify-claim/ticket-form/ticket-form.html',
                controller: 'staffrepay.TicketFormController as $ctrl'
            })

            .state('app.staffrepay.claim', {
                url: '/claim',
                templateUrl: 'app/staffrepay/verify-claim/claim-form/claim-form.html',
                controller: 'staffrepay.ClaimFormController as $ctrl'
            })

            .state('app.staffrepay.contact', {
                url: '/contact',
                templateUrl: 'app/staffrepay/verify-claim/contact-form/contact-form.html',
                controller: 'staffrepay.ContactFormController as $ctrl'
            })

            .state('app.staffrepay.success', {
                url: '/success',
                templateUrl: 'app/staffrepay/verify-claim/successful-claim/successful-claim.html'
            });
    });
}
}