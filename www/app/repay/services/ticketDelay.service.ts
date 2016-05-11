
module RailTech {
export module Repay {

export class TicketUploadService {

    private modal;
    private claims;

    private delayClaimUrl = '/api/ticket/delayClaim';

    static $inject = [
        "$rootScope",
        "$http",
        "$q",
        "$timeout",
        "$cordovaCamera",
        "$ionicModal"];

    constructor(
            private $rootScope,
            private $http,
            private $q,
            private $timeout,
            private $cordovaCamera, 
            private $ionicModal) {

    }

    public captureTicket() {
        // Necessary as otherwise we get error that "Camera" is not defined.
        var isWebView = ionic.Platform.is('browser');
        if(isWebView) {
            return this.captureTicketBrowser();
        }
        else {
            return this.captureTicketMobile();
        }
    }

    private captureTicketBrowser() {

        var deferred = this.$q.defer();

        var modalLocation = "app/repay/capture-picture/";
        var modalTemplate = "capture-picture.html";
        var modalScope = this.$rootScope.$new(true); // True makes scope isolated

        this.$ionicModal
            .fromTemplateUrl(modalLocation + modalTemplate, {
                scope: modalScope,
                animation: "slide-in-up"
            })
            .then((modal) => {
                modalScope.modal = modal;
                modalScope.modal.show();
            });

        modalScope.$on("$destroy", () => {
            modalScope.modal.remove();
        });
        modalScope.$on('modal.hidden', () => {
            modalScope.$destroy();
        });
        modalScope.$on('modal.removed', () => {
            deferred.resolve(modalScope.modal.ticketImage64)
            modalScope.$destroy();
        });

        return deferred.promise;
    }

    private captureTicketMobile() {
        var deferred = this.$q.defer();

        var imageOptions = {
            quality: 45,
            targetWidth: 1000,
            targetHeight: 1000,
            destinationType: Camera.DestinationType.DATA_URL,
            encodingType: Camera.EncodingType.JPEG,
            sourceType: Camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: false
        };

        this.$cordovaCamera.getPicture(imageOptions)
            .then((result) => {
                            deferred.resolve(result);
                         });

        return deferred.promise;
    }

    public getClaims() {

        var deferred = this.$q.defer();

        this.$http.get(this.delayClaimUrl)
            .then((response) => {
                deferred.resolve(response.data);
                console.log(response.data);
            });

        return deferred.promise;
    }

    public uploadClaim(image64, ticket, journey, user) {

        //Prepare form data
        var data = {
            image_64: image64,
            journey: {
                "from_station": ticket.fromStation,
                "to_station": ticket.toStation,
                "ticket_class": ticket.class,
                "ticket_type": ticket.type,
                "from_date": ticket.fromDate,
                "to_date": ticket.toDate,
                "journey_date": journey.journeyDate,
                "delay_length": journey.delayLength,
                "cost": journey.cost 
            },
            contact_details: {
                "title": user.title,
                "first_name": user.firstName,
                "last_name": user.lastName,
                "post_code": user.postCode,
                "address": user.address,
                "email": user.email
            },
            payment: {
                "payment_type": "BANK_TRANSFER",
                "account_number": "0712382",
                "sort_code": "0292312"
            }
        };

        return this.$http.put(this.delayClaimUrl, data)
            .then(function(response) {
                var data = response.data;
                console.log(data);
                return data;
            });
    }
}

angular.module('repay')
    .service('repay.ticketDelayService', TicketUploadService)

} // Repay
} // RailTech