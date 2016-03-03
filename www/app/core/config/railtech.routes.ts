
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
            templateUrl: 'app/core/railtech.html',
            controller: 'AppCtrl'
        })

        .state('app.modules', {
            url: '/modules',
            templateUrl: 'app/core/launcher/launcher.html',
            controller: 'ModulesCtrl'
        })

        .state('app.activity', {
            url: '/activity',
            templateUrl: 'templates/activity.html',
            controller: 'ActivityCtrl'
        })

        .state('app.friends', {
            url: '/friends',
            templateUrl: 'templates/friends.html',
            controller: 'FriendsCtrl'
        })

        .state('app.gallery', {
            url: '/gallery',
            templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
        })

        .state('app.login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })

        .state('app.profile', {
            url: '/profile',
            templateUrl: 'templates/profile.html',
            controller: 'ProfileCtrl'
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/login');
    });
}
