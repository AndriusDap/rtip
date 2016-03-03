var RailTech;
(function (RailTech) {
    angular.module('railtech')
        .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
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
        .config(function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin rSearchControlleresource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'http://virgintrains.co.uk/**']);
    });
})(RailTech || (RailTech = {}));
