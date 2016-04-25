'use strict';

module RailTech {
export module ThingsToDo {

export class OverviewController {

    private settings;
    private events;
    private map;
    private markers;

    public static $inject = [
        "$scope",
        "$ionicLoading",
        "thingsToDo.thingsToDoService"];

    constructor(
            private $scope,
            private $ionicLoading,
            private thingsToDoService) {

        var datetime = new Date();
        datetime.setHours(2,30);

        this.settings = {
            datetime: datetime,
            location: "London"
        }

        this.findEvents();
        this.setupWatch();
    }

    public findEvents() {
        this.$ionicLoading.show();

        this.thingsToDoService.findThingsToDo()
            .then((result) => {

                this.events = result;

                return this.setupMap();
            })
            .then(() => {

                this.$scope.$broadcast('scroll.refreshComplete');
                this.$ionicLoading.hide();
            });     

    }

    private setupWatch() {
        this.$scope.$watch('$ctrl.settings', (newVal, oldVal) => {
            this.findEvents();
        }, true);
    }

    private setupMap() {

        var mapOptions = {
                  zoom: 9,
                  center: new google.maps.LatLng(53.4629985, -2.2944832),
                  mapTypeId: google.maps.MapTypeId.ROADMAP
              }

        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = (info) => {

            var marker = new google.maps.Marker({
                map: this.map,
                position: new google.maps.LatLng(info.lat, info.long),
                title: info.name
            });

            console.log(info);
            marker.content = '<div class="infoWindowContent">' + info.location + '<br /></div>';

            google.maps.event.addListener(marker, 'click', () => {
                infoWindow.setContent('<h2><a class="marker-title" href="/#app/thingsToDo/event/' + info.id + '">' + marker.title + '</a></h2>' + marker.content);
                infoWindow.open(this.map, marker);
            });

            return marker;
        }  

        for (i = 0; i < this.events.length; i++){
            this.events[i].marker = createMarker(this.events[i]);
        }
    }

    openInfoWindow(selectedMarker) {
        var center = new google.maps.LatLng(selectedMarker.lat, selectedMarker.long);
        this.map.setCenter(selectedMarker.position);
        google.maps.event.trigger(selectedMarker, 'click');
    }
}

angular.module('thingsToDo')
    .controller('thingsToDo.OverviewController', OverviewController)


} // Repay
} // RailTech
