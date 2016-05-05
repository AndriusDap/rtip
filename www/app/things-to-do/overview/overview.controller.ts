'use strict';

module RailTech {
export module ThingsToDo {

export class OverviewController {

    private settings;
    private events;
    private visibleEvents;

    private map;
    private markers;
    private eventsContainerWidth;
    private mapWidth;
    private currentPolyLines;

    private sortingBy;
    private sortFunctions = {
        time: (a, b) => { return a.route.time - b.route.time },
        price: (a, b) => { return a.event.price - b.event.price },
        name: (a, b) => { 
            if (a.event.name < b.event.name) return -1;
            if (a.event.name > b.event.name) return 1;
            return 0;
        }
    }

    private typeChosen = "ALL TYPES";
    private types = ["ALL TYPES", "Places to stay", "Things to do", "Places to eat", "Competition"]
    private themeChosen = "ALL THEMES";
    private themes = ["ALL THEMES", "Family fun", "Romantic break", "History and heritage", "City break", "Food lovers", "Sports and adventure", "Arts and culture", "Beach", "Health and wellbeing", "Music"]

    public static $inject = [
        "$scope",
        "$ionicLoading",
        "$window",
        "$rootScope",
        "thingsToDo.thingsToDoService"];

    constructor(
            private $scope,
            private $ionicLoading,
            private $window,
            private $rootScope,
            private thingsToDoService) {

        var datetime = new Date();
        var traveltime = new Date();
        
        traveltime.setHours(2,30);

        this.mapWidth = 0;
        this.eventsContainerWidth = 450;
        this.currentPolyLines = [];

        this.settings = {
            datetime: datetime,
            traveltime: traveltime,
            location: "London"
        };

        this.setupWatch();
        this.setupMapResize();
    }

    public findEvents() {
        this.$ionicLoading.show();

        var coords = [51.51, -0.14];
        var datetime = this.settings.datetime.toISOString();
        var toc = this.$rootScope.toc || "GWR";

        var travelHours = this.settings.traveltime.getHours();
        var travelMinutes = this.settings.traveltime.getMinutes();
        var travelTime = travelHours * 60 * 60 + travelMinutes * 60;

        this.thingsToDoService.findThingsToDo(coords, travelTime, datetime, toc)
            .then((events) => {

                this.events = events;
                this.visibleEvents = this.events.slice();

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
                  center: new google.maps.LatLng(51.733315, -1.337027),
                  mapTypeId: google.maps.MapTypeId.ROADMAP
              }

        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = (info, route) => {

            var marker = new google.maps.Marker({
                map: this.map,
                position: new google.maps.LatLng(info.coords[0], info.coords[1]),
                title: info.name,
                route: route
            });

            marker.content = '<div class="infoWindowContent">' + info.location + '<br /></div>';

            google.maps.event.addListener(marker, 'click', () => {
                // removed <div class="map-image-container" style="background: url(' + info.image + '); background-size: cover;"></div>
                infoWindow.setContent('<div><a class="marker-title theme-main-color-link" href="/#app/thingsToDo/event/' + info.id + '">' + marker.title + '</a></div>' + marker.content);
                infoWindow.open(this.map, marker);
                this.createPolyLine(marker.route);
            });

            return marker;
        }  

        for (var i = 0; i < this.visibleEvents.length; i++) {
            this.visibleEvents[i].marker = createMarker(this.visibleEvents[i].event, this.visibleEvents[i].route);
        }
    }

    openInfoWindow(selectedMarker) {
        var center = new google.maps.LatLng(selectedMarker.lat, selectedMarker.long);
        this.map.setCenter(selectedMarker.position);

        this.createPolyLine(selectedMarker.route);

        google.maps.event.trigger(selectedMarker, 'click');
    }

    createPolyLine(route) {

        if (this.currentPolyLines) {
            for (var i = 0; i < this.currentPolyLines.length; i++) {
                this.currentPolyLines[i].setMap(null);
            }
        }

        for (var i = 0; i < route.parts.length; i++) {
            var currPart = route.parts[i];

            var mode = currPart.mode;
            var color;
            if(mode === "walk"){
                color = "#FF00FF";
            } else if(mode === "bus") {
                color = "#0000FF";
            } else if(mode === "rail_underground") {
                color = "#FF7F00";
            } else if(mode === "rail_national") {
                color = "#FF0000";
            }

            var flightPlanCoordinates = [];

            for (var j = 0; j < currPart.coords.length; j++) {
                var currCoord = currPart.coords[j];

                flightPlanCoordinates.push({
                    lat: currCoord[0],
                    lng: currCoord[1]
                });
            }       

            var polyline = new google.maps.Polyline({
                path: flightPlanCoordinates,
                geodesic: true,
                strokeColor: color,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            polyline.setMap(this.map);

            this.currentPolyLines.push(polyline)
        }
    }

    setupMapResize() {
        var width = this.$window.innerWidth;
        this.mapWidth = width - this.eventsContainerWidth;

        angular.element(this.$window).bind('resize', () => {

            var width = this.$window.innerWidth;
            this.mapWidth = width - this.eventsContainerWidth;
            this.$scope.$digest();
       });
    }

    sortBy(sortFuncStr) {

        if (this.sortingBy === sortFuncStr) {
            this.visibleEvents = this.events.slice();
            this.sortingBy = "";
            return;
        }

        this.sortingBy = sortFuncStr;

        var sortFunc = this.sortFunctions[sortFuncStr];
        this.visibleEvents.sort(sortFunc);
    }

    updateFilters() {
        this.visibleEvents = this.events.slice();

        if(this.typeChosen !== "ALL TYPES") {
            this.visibleEvents = this.visibleEvents.filter((o) => { return o.event.type === this.typeChosen; });
        }
        if(this.themeChosen !== "ALL THEMES") {
            this.visibleEvents = this.visibleEvents.filter((o) => { return o.event.theme.indexOf(this.themeChosen) > -1; });
        }

        this.setupMap();
    }
}

angular.module('thingsToDo')
    .controller('thingsToDo.OverviewController', OverviewController)


} // Repay
} // RailTech
