'use strict';
var RailTech;
(function (RailTech) {
    var ResultsController = (function () {
        function ResultsController($state, $scope, ionicMaterialInk, ionicMaterialMotion) {
            this.$state = $state;
            $scope.$parent.showHeader();
            $scope.$parent.clearFabs();
            $scope.isExpanded = true;
            $scope.$parent.setExpanded(true);
            $scope.$parent.setHeaderFab(false);
            ionicMaterialMotion.pushDown({
                selector: '.push-down'
            });
            ionicMaterialMotion.fadeSlideInRight({
                selector: '.animate-fade-slide-in .item'
            });
        }
        ResultsController.$scope = [
            '$state',
            '$scope',
            'ionicMaterialInk',
            'ionicMaterialMotion'];
        return ResultsController;
    }());
    RailTech.ResultsController = ResultsController;
    angular.module('ticketing')
        .controller('ResultsController', ResultsController);
})(RailTech || (RailTech = {}));
