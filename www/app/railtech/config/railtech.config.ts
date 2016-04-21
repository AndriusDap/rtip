
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

        // var url = window.location.href;
        // var queryParamsArr = url.split("?");
        // console.log(queryParamsArr[1]);

        // try {
        //     var queryParamsRaw = queryParamsArr[1];
        //     var queryParams = getQueryParams(queryParamsRaw);

        //     console.log(queryParams);
        // }
        // catch() {

        // }
    })
    .run(function(
            $ionicPlatform) {

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

    });

}