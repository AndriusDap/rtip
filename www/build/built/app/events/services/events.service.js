var RailTech;
(function (RailTech) {
    var Events;
    (function (Events) {
        var EventsService = (function () {
            function EventsService($q, $timeout) {
                this.$q = $q;
                this.$timeout = $timeout;
                this.stations = [{
                        city: "London",
                        cover: "http://i.dailymail.co.uk/i/pix/2013/02/06/article-2274355-02DADEA00000044D-633_634x405.jpg",
                        eventNumber: 4,
                        events: []
                    },
                    {
                        city: "Manchester",
                        cover: "http://static1.squarespace.com/static/534f9765e4b02e8e0e0e54aa/53583b20e4b07ec2da390417/53583b29e4b01c3d34566403/1398291255971/manchesterimage6.jpg",
                        eventNumber: 5
                    },
                    {
                        city: "Birmingham",
                        cover: "http://www.lancaster.ac.uk/colleges/graduate/wp-content/uploads/2016/01/Birmingham-AP68276_3152879b.jpg",
                        eventNumber: 2
                    },
                    {
                        city: "Southampton",
                        cover: "https://www.propertycashbuyers.com/wp-content/uploads/2015/09/Southampton-city-skyline-of-commercial-property.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Bristol",
                        cover: "https://www.crosscountrytrains.co.uk/media/22701/trains_to_bristol.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Edinburgh",
                        cover: "http://www.flybe.com/cheap-flights/edinburgh/edinburgh-events-16x9.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Glasgow",
                        cover: "http://www.lastminute.com/c/content/dam/site_gb/CityBreaks/destinationPages/glasgow-1155x510.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Sheffield",
                        cover: "http://i.dailymail.co.uk/i/pix/2013/07/29/article-2333778-1B0D9D33000005DC-944_634x424.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Cardiff",
                        cover: "https://upload.wikimedia.org/wikipedia/commons/0/03/Cardiff_Bay_at_night.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Nottingham",
                        cover: "http://www.theexchange.uk.net/media/5616/Market-Square-Nottingham.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Newcastle",
                        cover: "http://www.pitcherandpiano.com/media/images/PP-Newcastle-087_big.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "York",
                        cover: "https://upload.wikimedia.org/wikipedia/commons/3/3d/York_City_Walls_-_geograph.org.uk_-_589000.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Cambridge",
                        cover: "https://www.whiteandcompany.co.uk/wp-content/uploads/2015/03/moving-home-to-cambridge.jpg.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Oxford",
                        cover: "http://www.connectedoxford.com/Customer/CO/images/OxfordImage.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Brighton",
                        cover: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Brighton_Pier_at_dusk.jpg",
                        eventNumber: 4
                    }];
            }
            EventsService.prototype.getStationsList = function () {
                var _this = this;
                var deferred = this.$q.defer();
                // simulating hitting server
                this.$timeout(function () {
                    deferred.resolve(_this.stations);
                }, 2000);
                return deferred.promise;
            };
            EventsService.prototype.getStationDetail = function (query) {
                var _this = this;
                var deferred = this.$q.defer();
                this.$timeout(function () {
                    for (var i = 0; i < _this.stations.length; i++) {
                        if (angular.lowercase(_this.stations[i].city) == angular.lowercase(query)) {
                            deferred.resolve(_this.stations[i]);
                            return;
                        }
                    }
                    deferred.reject();
                }, 2000);
                return deferred.promise;
            };
            EventsService.$inject = [
                "$q",
                "$timeout"];
            return EventsService;
        }());
        Events.EventsService = EventsService;
        angular.module('events')
            .service('EventsService', EventsService);
    })(Events = RailTech.Events || (RailTech.Events = {})); // Events
})(RailTech || (RailTech = {})); // RailTech
