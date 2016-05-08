
module RailTech {

function getQueryParams(str) {
  return str.replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
}

angular.module('railtech')
    .config(function(
            $ionicConfigProvider, 
            $mdGestureProvider,
            $locationProvider,
            $ionicConfigProvider) {

        $ionicConfigProvider.views.transition("android");
        // Quickfix for android ng-click firing twice.
        // TODO: remove. check https://github.com/driftyco/ionic/issues/1022
        $mdGestureProvider.skipClickHijack();

        var url = window.location.href;
        var queryParamsArr = url.split("?");

        if(queryParamsArr && queryParamsArr.length > 1) {
            var queryParamsRaw = queryParamsArr[1];
            var queryParams = getQueryParams(queryParamsRaw);

            // Enabling js scrolling (not ionic) if embeded in an iframe            
            var embed = (queryParams.embed == 'true');
            $ionicConfigProvider.scrolling.jsScrolling(!embed);
        }
    })
    .run(function(
            $ionicPlatform,
            $location,
            $rootScope) {

        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                window.StatusBar.styleDefault();
            }
        });

        window.queryParams = {};

        var queryParams = $location.search();
        $rootScope.embed = queryParams.embed == 'true';
        $rootScope.toc = queryParams.toc || "gwr";

    });

}