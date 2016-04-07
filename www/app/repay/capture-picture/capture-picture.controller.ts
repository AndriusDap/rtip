'use strict';

module RailTech {
export module Repay {

export class CapturePictureController {

    private canvas;
    private context;

    public static $inject = [
        '$scope'];

    constructor(
            private $scope) {
        this.setupCamera();
    }

    private setupCamera() {

        angular.element(document).ready(() => {

            var video = document.getElementById("video"),
                videoObj = { "video": true },
                errBack = function(error) {
                    console.log("Video capture error: ", error.code); 
                };

            this.canvas = document.getElementById("canvas");
            this.context = canvas.getContext("2d");

            // Put video listeners into place
            if(navigator.getUserMedia) { // Standard
                navigator.getUserMedia(videoObj, function(stream) {
                    video.src = stream;
                    video.play();
                }, errBack);
            } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
                navigator.webkitGetUserMedia(videoObj, function(stream){
                    video.src = window.webkitURL.createObjectURL(stream);
                    video.play();
                }, errBack);
            }
            else if(navigator.mozGetUserMedia) { // Firefox-prefixed
                navigator.mozGetUserMedia(videoObj, function(stream){
                    video.src = window.URL.createObjectURL(stream);
                    video.play();
                }, errBack);
            }
        }
    }

    capturePicture() {
        this.context.drawImage(video, 0, 0, 640, 480);
        this.$scope.ticketImage64 = this.canvas.toDataURL('image/png');
        this.$scope.modal.remove();
    }

}

angular.module('repay')
    .controller('CapturePictureController', CapturePictureController)


} // Repay
} // RailTech
