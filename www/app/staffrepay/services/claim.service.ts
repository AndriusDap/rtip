
module RailTech {
export module StaffRepay {

export class ClaimService {

    public ticket;
    public journey;

    public tempCurrElem = 0;

    static $inject = [
        "$http",
        "$q",
        "$timeout"];

    constructor(
            private $http,
            private $q,
            private $timeout) {

    }

    public getClaims(claimStatus, pageNumber, limit) {

        var deferred = this.$q.defer();

        var params = {
            params: {
                withoutImage: true
            }
        }

        this.$http.get("http://localhost:3000/delayClaim", params)
            .then((response) => {

                deferred.resolve(response.data);
            });            

        return deferred.promise;
    }

    public getClaim(params) {
        var deferred = this.$q.defer();

        this.$http.get("http://localhost:3000/delayClaim", { params: params })
            .then((response) => {

                if (response.data.length === 0) {
                    return deferred.resolve(null);
                }
                
                var delayClaimResponse = response.data[0];
                console.log(delayClaimResponse);

                var journeyResponse = delayClaimResponse.journey;
                var claimResponse = delayClaimResponse.claim_validation;
                var contactResponse = delayClaimResponse.contact_details;
                var paymentResponse = delayClaimResponse.payment_details;

                var img64raw = journeyResponse.image_64.split(",");
                var img64 = img64raw[0];

                if (img64raw.length > 1) {
                    img64 = img64raw[1];
                }

                var ticket = {
                    fromStation: journeyResponse.from_station,
                    toStation: journeyResponse.to_station,
                    class: journeyResponse.ticket_class,
                    type: journeyResponse.ticket_type,
                    fromDate: journeyResponse.from_date,
                    toDate: journeyResponse.to_date,
                    cost: journeyResponse.cost,
                    journeyDate: new Date(journeyResponse.journey_date);
                };

                var claim = {
                    delay: claimResponse.delay_length,
                    id: claimResponse.id,
                    identifier: claimResponse.journey_identifier,
                    serviceId: claimResponse.service_id,
                    status: claimResponse.status,
                    totalRefund: claimResponse.totalRefund
                };

                var contact = {
                    address: contactResponse.address,
                    email: contactResponse.email,
                    firstName: contactResponse.first_name,
                    lastName: contactResponse.last_name,
                    id: contactResponse.id,
                    postCode: contactResponse.post_code,
                    title: contactResponse.title
                };

                var payment = {
                    accountNumber: paymentResponse.account_number,
                    id: paymentResponse.id,
                    paymentType: paymentResponse.payment_type,
                    sortCode: paymentResponse.sort_code
                };

                var delayClaim = {
                    ticket: ticket,
                    claim: claim,
                    contact: contact,
                    payment: payment,
                    image64: img64
                };

                deferred.resolve(delayClaim);
            });

        return deferred.promise;
    }

    public getAnalytics(claimId) {

        var deferred = this.$q.defer();

        var allFlaggedAnalytics = [
            {
                fraudPercent: 45,
                showImage: false,
                fraudMessage: "Suspicious email and service.",
                analytics: [
                    {
                        field: "Email",
                        value: "river@hackpartners.com",
                        outstanding: 1,
                        accepted: 2,
                        rejected: 12,
                        flagged: 2
                    },
                    {
                        field: "Service",
                        value: "R123142",
                        outstanding: 15,
                        accepted: 45,
                        rejected: 12,
                        flagged: 4
                    }
                ]
            },
            {
                fraudPercent: 25,
                showImage: true,
                fraudMessage: "Suspicious email and image.",
                analytics: [
                    {
                        field: "Email",
                        value: "river@hackpartners.com",
                        outstanding: 1,
                        accepted: 2,
                        rejected: 12,
                        flagged: 2
                    }
                ]
            },
            {
                fraudPercent: 82,
                showImage: true,
                fraudMessage: "Suspicious email, ticket number, service, ip address and image.",
                analytics: [
                    {
                        field: "Email",
                        value: "suspicious@randomwebsite.com",
                        outstanding: 1,
                        accepted: 2,
                        rejected: 12,
                        flagged: 2
                    },
                    {
                        field: "Ticket Number",
                        value: "887818",
                        outstanding: 130,
                        accepted: 13,
                        rejected: 12,
                        flagged: 4
                    },
                    {
                        field: "Service",
                        value: "R123142",
                        outstanding: 15,
                        accepted: 45,
                        rejected: 12,
                        flagged: 4
                    },
                    {
                        field: "IP",
                        value: "82.132.230.153",
                        outstanding: 20,
                        accepted: 67,
                        rejected: 32,
                        flagged: 14
                    }
                ]
            }
        ];

        var curr = allFlaggedAnalytics[this.tempCurrElem];
        this.tempCurrElem = (this.tempCurrElem + 1) % allFlaggedAnalytics.length;

        deferred.resolve(curr);

        return deferred.promise;
    }

    public updateTicket(claimId, ticket) {

        var deferred = this.$q.defer();

        var ticketRequest = {
            claimId: claimId,
            identification: ticket.identification,
            ticketClass: ticket.class,
            ticketType: ticket.type,
            fromDate: ticket.fromDate,
            toDate: ticket.toDate,
            cost: ticket.cost
        };

        this.$http.post("http://localhost:3000/delayClaim", ticketRequest)
            .then((response) => {

                var data = response.data;

                deferred.resolve(data);
            });
        
        return deferred.promise;
    }
}

angular.module('staffrepay')
    .service('ClaimService', ClaimService)


} // Ticketing
} // RailTech