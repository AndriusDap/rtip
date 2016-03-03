'use strict';

module RailTech {

export class ResultsController {

    public static $scope = [
        '$state',
        '$scope', 
        'ionicMaterialInk', 
        'ionicMaterialMotion'];

    constructor(
            private $state,
            $scope, 
            ionicMaterialInk, 
            ionicMaterialMotion) {

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
}

angular.module('ticketing')
    .controller('ResultsController', ResultsController)

}
