
module RailTech {

angular.module('railtech')
    .run(function($ionicPlatform) {
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
    })
    .config(function($ionicConfigProvider, $mdGestureProvider) {

        $ionicConfigProvider.views.transition("android");
        
        // Quickfix for android ng-click firing twice.
        // TODO: remove. check https://github.com/driftyco/ionic/issues/1022
        $mdGestureProvider.skipClickHijack();

    });

}