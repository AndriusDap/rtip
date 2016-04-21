'use strict';

module RailTech {

export class LauncherController {

    private theme = "GWR";

    public static $inject = [
        '$scope',
        'ionicMaterialInk', 
        'ionicMaterialMotion'];

    constructor(
            private $scope,
            ionicMaterialInk, 
            ionicMaterialMotion) {

        $scope.$parent.showHeader();
        $scope.$parent.setExpanded(false);

        ionicMaterialMotion.pushDown({
            selector: '.push-down'
        });
        ionicMaterialMotion.fadeSlideInRight({
            selector: '.animate-fade-slide-in .item'
        });
    }

    launchTicketing() {

        var url,
            themeColor;

        if(this.theme === "GWR") {
            url = 'http://tickets.gwr.com/gw/en/controls/ticketsearchcontrol';
            themeColor = '#0A3A2F';
        }
        else if (this.theme === "VT") {
            url = 'https://m-tickets.virgintrainseastcoast.com/webtis-ec/travel/search';
            themeColor = '#B71C1C';
        }

        try {
            cordova.ThemeableBrowser.open(url, '_blank', { statusbar: { color: themeColor }, toolbar: { height: 44, color: themeColor }, title: { color: themeColor, showPageTitle: false }, closeButton: { wwwImage: 'img/close.png', align: 'left', event: 'closePressed' }, backButton: { wwwImage: 'img/back.png', imagePressed: 'back_pressed', align: 'left', event: 'backPressed' }, forwardButton: { wwwImage: 'img/forward.png', imagePressed: 'forward_pressed', align: 'left', event: 'forwardPressed' } });
        }
        catch (err) {
            // Compatibility for in-browser.
            window.open(url, "_self");
        }
    }

}

angular.module('railtech')
    .controller('LauncherController', LauncherController)


} // RailTech
