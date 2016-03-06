var RailTech;
(function (RailTech) {
    var Ticketing;
    (function (Ticketing) {
        var SearchStation = (function () {
            function SearchStation() {
            }
            return SearchStation;
        }());
        Ticketing.SearchStation = SearchStation;
        var Journey = (function () {
            function Journey(departureDate, arrivalDate, lengthStr, type, price) {
                this.departureDate = departureDate;
                this.arrivalDate = arrivalDate;
                this.lengthStr = lengthStr;
                this.type = type;
                this.price = price;
            }
            return Journey;
        }());
        Ticketing.Journey = Journey;
    })(Ticketing = RailTech.Ticketing || (RailTech.Ticketing = {}));
})(RailTech || (RailTech = {}));
