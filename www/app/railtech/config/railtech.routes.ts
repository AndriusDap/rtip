
module RailTech {

angular.module('railtech')
    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        // Turn off caching for demo simplicity's sake
        $ionicConfigProvider.views.maxCache(0);

        /*
        // Turn off back button text
        $ionicConfigProvider.backButton.previousTitleText(false);
        */

        $stateProvider.state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'app/railtech/railtech.html',
            controller: 'RailTechController as $ctrl'
        })

        .state('app.modules', {
            url: '/modules',
            templateUrl: 'app/railtech/launcher/launcher.html',
            controller: 'LauncherController as $ctrl'
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/modules');
    });
}
