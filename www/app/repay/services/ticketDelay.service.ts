
module RailTech {
export module Repay {

export class TicketUploadService {

    private modal;
    private ticketImage64;

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
            this.captureTicketBrowser();
        }
        else {
            this.captureTicketMobile();
        }
    }

    private captureTicketBrowser() {
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
            console.log("modal scope removed");
            modalScope.modal.remove();
        });
        // Execute action on remove modal
        modalScope.$on("modal.removed", function() {
            this.ticketImage64 = modalScope.ticketImage64;
        });
    }

    private captureTicketMobile() {
        var imageOptions = { 
            quality : 100, 
            destinationType: Camera.DestinationType.DATA_URL,
            encodingType: Camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        };

        this.$cordovaCamera.getPicture(imageOptions)
            .then((result) => {
                    this.ticketImage64 = result;
                });
    }

    public uploadClaim(ticket, journey, user) {
        
    	var deferred = this.$q.defer();

    	this.$timeout(() => {

    		deferred.resolve();
    	}, 1000);

    	return deferred.promise;
    }
}

angular.module('staffrepay')
    .service('repay.ticketDelayService', TicketUploadService)

} // Repay
} // RailTech