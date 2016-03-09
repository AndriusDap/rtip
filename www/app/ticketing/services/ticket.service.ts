
module RailTech {
export module Repay {

export class TicketService {

    static $inject = [
        "$cordovaCamera", 
        "$timeout",
        "$q"];

    constructor(
            private $cordovaCamera, 
            private $timeout,
            private $q) {

    }

    public takePicture() {

        var imageOptions = { 
            quality : 100, 
            saveToPhotoAlbum: false
        };

        var imagePromise = this.$cordovaCamera.getPicture(imageOptions);

        return imagePromise;
    }

    public extractTextFromImage64(image64: string) {

        var deferred = this.$q.defer();

        this.$timeout(() => {
            
            deferred.resolve();

        },4000);

        return deferred.promise;
    }

}

angular.module('repay')
    .service('TicketService', TicketService)


} // Ticketing
} // RailTech