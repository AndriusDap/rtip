"use strict";
var RailTech;
(function (RailTech) {
    var SearchComponent = (function () {
        function SearchComponent() {
            this.controller = RailTech.SearchController;
            this.templateUrl = "";
            this.bindings = {};
        }
        return SearchComponent;
    }());
    angular.module('ticketing')
        .component('searchComponent', new SearchComponent());
})(RailTech || (RailTech = {}));
