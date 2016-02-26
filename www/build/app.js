// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput'])
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
    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);
    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */
    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })
        .state('app.modules', {
        url: '/modules',
        views: {
            'menuContent': {
                templateUrl: 'templates/modules.html',
                controller: 'ModulesCtrl'
            },
            'fabContent': {
                template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
    })
        .state('app.ticketing', {
        url: '/ticketing',
        views: {
            'menuContent': {
                templateUrl: 'templates/ticketing.html',
                controller: 'TicketingCtrl'
            },
            'fabContent': {
                template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
    })
        .state('app.activity', {
        url: '/activity',
        views: {
            'menuContent': {
                templateUrl: 'templates/activity.html',
                controller: 'ActivityCtrl'
            },
            'fabContent': {
                template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
    })
        .state('app.friends', {
        url: '/friends',
        views: {
            'menuContent': {
                templateUrl: 'templates/friends.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                template: '<button id="fab-friends" class="button button-fab button-fab-top-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-friends').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })
        .state('app.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
            },
            'fabContent': {
                template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-gallery').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })
        .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })
        .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});

/* global angular, document, window */
'use strict';
angular.module('starter.controllers', [])
    .controller('ModulesCtrl', function ($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);
    // Activate ink for controller
    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });
})
    .controller('TicketingCtrl', function ($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);
    // Activate ink for controller
    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });
})
    .controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;
    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }
    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////
    $scope.hideNavBar = function () {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };
    $scope.showNavBar = function () {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };
    $scope.noHeader = function () {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };
    $scope.setExpanded = function (bool) {
        $scope.isExpanded = bool;
    };
    $scope.setHeaderFab = function (location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;
        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }
        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };
    $scope.hasHeader = function () {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };
    $scope.hideHeader = function () {
        $scope.hideNavBar();
        $scope.noHeader();
    };
    $scope.showHeader = function () {
        $scope.showNavBar();
        $scope.hasHeader();
    };
    $scope.clearFabs = function () {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})
    .controller('LoginCtrl', function ($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function () {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
})
    .controller('FriendsCtrl', function ($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');
    // Delay expansion
    $timeout(function () {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);
    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();
    // Set Ink
    ionicMaterialInk.displayEffect();
})
    .controller('ProfileCtrl', function ($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    // Set Motion
    $timeout(function () {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    $timeout(function () {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
    // Set Ink
    ionicMaterialInk.displayEffect();
})
    .controller('ActivityCtrl', function ($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');
    $timeout(function () {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);
    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})
    .controller('GalleryCtrl', function ($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);
    // Activate ink for controller
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2FwcC50cyIsInRzL2NvbnRyb2xsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQU1wQiw0RkFBNEY7QUFDNUYsc0dBQXNHO0FBQ3RHLDhDQUE4QztBQUM5QyxtREFBbUQ7QUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FFMUYsR0FBRyxDQUFDLFVBQVMsY0FBYztJQUN4QixjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ2pCLDhGQUE4RjtRQUM5RixtQkFBbUI7UUFDbkIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3BELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQix3Q0FBd0M7WUFDeEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7S0FFRCxNQUFNLENBQUMsVUFBUyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CO0lBRXJFLDhDQUE4QztJQUM5QyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXZDOzs7TUFHRTtJQUVGLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1FBQ3hCLEdBQUcsRUFBRSxNQUFNO1FBQ1gsUUFBUSxFQUFFLElBQUk7UUFDZCxXQUFXLEVBQUUscUJBQXFCO1FBQ2xDLFVBQVUsRUFBRSxTQUFTO0tBQ3hCLENBQUM7U0FFRCxLQUFLLENBQUMs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Q0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXJDLFFBQVEsQ0FBQztRQUNMLG1CQUFtQixDQUFDLFdBQVcsQ0FBQztZQUM1QixRQUFRLEVBQUUsOEJBQThCO1NBQzNDLENBQUMsQ0FBQztJQUNQLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUVSLDhCQUE4QjtJQUM5QixnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUNyQyxDQUFDLENBQUM7S0FFRCxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVMsTUFBTSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CO0lBQ3JHLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQixNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVuQyw4QkFBOEI7SUFDOUIsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFFakMsbUJBQW1CLENBQUMsUUFBUSxDQUFDO1FBQ3pCLFFBQVEsRUFBRSxZQUFZO0tBQ3pCLENBQUMsQ0FBQztJQUNILG1CQUFtQixDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLFFBQVEsRUFBRSw4QkFBOEI7S0FDM0MsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBRUQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgU3RhcnRlciBBcHBcblxuaW50ZXJmYWNlIFdpbmRvdyB7IFxuICAgIFN0YXR1c0JhcjogYW55OyBcbn1cblxuLy8gYW5ndWxhci5tb2R1bGUgaXMgYSBnbG9iYWwgcGxhY2UgZm9yIGNyZWF0aW5nLCByZWdpc3RlcmluZyBhbmQgcmV0cmlldmluZyBBbmd1bGFyIG1vZHVsZXNcbi8vICdzdGFydGVyJyBpcyB0aGUgbmFtZSBvZiB0aGlzIGFuZ3VsYXIgbW9kdWxlIGV4YW1wbGUgKGFsc28gc2V0IGluIGEgPGJvZHk+IGF0dHJpYnV0ZSBpbiBpbmRleC5odG1sKVxuLy8gdGhlIDJuZCBwYXJhbWV0ZXIgaXMgYW4gYXJyYXkgb2YgJ3JlcXVpcmVzJ1xuLy8gJ3N0YXJ0ZXIuY29udHJvbGxlcnMnIGlzIGZvdW5kIGluIGNvbnRyb2xsZXJzLmpzXG5hbmd1bGFyLm1vZHVsZSgnc3RhcnRlcicsIFsnaW9uaWMnLCAnc3RhcnRlci5jb250cm9sbGVycycsICdpb25pYy1tYXRlcmlhbCcsICdpb25NZElucHV0J10pXG5cbi5ydW4oZnVuY3Rpb24oJGlvbmljUGxhdGZvcm0pIHtcbiAgICAkaW9uaWNQbGF0Zm9ybS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gSGlkZSB0aGUgYWNjZXNzb3J5IGJhciBieSBkZWZhdWx0IChyZW1vdmUgdGhpcyB0byBzaG93IHRoZSBhY2Nlc3NvcnkgYmFyIGFib3ZlIHRoZSBrZXlib2FyZFxuICAgICAgICAvLyBmb3IgZm9ybSBpbnB1dHMpXG4gICAgICAgIGlmICh3aW5kb3cuY29yZG92YSAmJiB3aW5kb3cuY29yZG92YS5wbHVnaW5zLktleWJvYXJkKSB7XG4gICAgICAgICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuaGlkZUtleWJvYXJkQWNjZXNzb3J5QmFyKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cuU3RhdHVzQmFyKSB7XG4gICAgICAgICAgICAvLyBvcmcuYXBhY2hlLmNvcmRvdmEuc3RhdHVzYmFyIHJlcXVpcmVkXG4gICAgICAgICAgICB3aW5kb3cuU3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59KVxuXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRpb25pY0NvbmZpZ1Byb3ZpZGVyKSB7XG5cbiAgICAvLyBUdXJuIG9mZiBjYWNoaW5nIGZvciBkZW1vIHNpbXBsaWNpdHkncyBzYWtlXG4gICAgJGlvbmljQ29uZmlnUHJvdmlkZXIudmlld3MubWF4Q2FjaGUoMCk7XG5cbiAgICAvKlxuICAgIC8vIFR1cm4gb2ZmIGJhY2sgYnV0dG9uIHRleHRcbiAgICAkaW9uaWNDb25maWdQcm92aWRlci5iYWNrQnV0dG9uLnByZXZpb3VzVGl0bGVUZXh0KGZhbHNlKTtcbiAgICAqL1xuXG4gICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2FwcCcsIHtcbiAgICAgICAgdXJsOiAnL2FwcCcsXG4gICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9tZW51Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQXBwQ3RybCdcbiAgICB9KVxuXG4gICAgLnN0YXRlKCdhcHAubW9kdWxlcycsIHtcbiAgICAgICAgdXJsOiAnL21vZHVsZXMnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL21vZHVsZXMuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01vZHVsZXNDdHJsJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdmYWJDb250ZW50Jzoge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGJ1dHRvbiBpZD1cImZhYi1hY3Rpdml0eVwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1mYWIgYnV0dG9uLWZhYi10b3AtcmlnaHQgZXhwYW5kZWQgYnV0dG9uLWVuZXJnaXplZC05MDAgZmxhcFwiPjxpIGNsYXNzPVwiaWNvbiBpb24tcGFwZXItYWlycGxhbmVcIj48L2k+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoJHRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhYi1hY3Rpdml0eScpLmNsYXNzTGlzdC50b2dnbGUoJ29uJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuXG4gICAgLnN0YXRlKCdhcHAudGlja2V0aW5nJywge1xuICAgICAgICB1cmw6ICcvdGlja2V0aW5nJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy90aWNrZXRpbmcuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpY2tldGluZ0N0cmwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2ZhYkNvbnRlbnQnOiB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8YnV0dG9uIGlkPVwiZmFiLWFjdGl2aXR5XCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLWZhYiBidXR0b24tZmFiLXRvcC1yaWdodCBleHBhbmRlZCBidXR0b24tZW5lcmdpemVkLTkwMCBmbGFwXCI+PGkgY2xhc3M9XCJpY29uIGlvbi1wYXBlci1haXJwbGFuZVwiPjwvaT48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkdGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFiLWFjdGl2aXR5JykuY2xhc3NMaXN0LnRvZ2dsZSgnb24nKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLnN0YXRlKCdhcHAuYWN0aXZpdHknLCB7XG4gICAgICAgIHVybDogJy9hY3Rpdml0eScsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYWN0aXZpdHkuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0FjdGl2aXR5Q3RybCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZmFiQ29udGVudCc6IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzxidXR0b24gaWQ9XCJmYWItYWN0aXZpdHlcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tZmFiIGJ1dHRvbi1mYWItdG9wLXJpZ2h0IGV4cGFuZGVkIGJ1dHRvbi1lbmVyZ2l6ZWQtOTAwIGZsYXBcIj48aSBjbGFzcz1cImljb24gaW9uLXBhcGVyLWFpcnBsYW5lXCI+PC9pPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24gKCR0aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWItYWN0aXZpdHknKS5jbGFzc0xpc3QudG9nZ2xlKCdvbicpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAuc3RhdGUoJ2FwcC5mcmllbmRzJywge1xuICAgICAgICB1cmw6ICcvZnJpZW5kcycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvZnJpZW5kcy5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRnJpZW5kc0N0cmwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2ZhYkNvbnRlbnQnOiB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8YnV0dG9uIGlkPVwiZmFiLWZyaWVuZHNcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tZmFiIGJ1dHRvbi1mYWItdG9wLWxlZnQgZXhwYW5kZWQgYnV0dG9uLWVuZXJnaXplZC05MDAgc3BpblwiPjxpIGNsYXNzPVwiaWNvbiBpb24tY2hhdGJ1YmJsZXNcIj48L2k+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoJHRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhYi1mcmllbmRzJykuY2xhc3NMaXN0LnRvZ2dsZSgnb24nKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgOTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLnN0YXRlKCdhcHAuZ2FsbGVyeScsIHtcbiAgICAgICAgdXJsOiAnL2dhbGxlcnknLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2dhbGxlcnkuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0dhbGxlcnlDdHJsJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdmYWJDb250ZW50Jzoge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGJ1dHRvbiBpZD1cImZhYi1nYWxsZXJ5XCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLWZhYiBidXR0b24tZmFiLXRvcC1yaWdodCBleHBhbmRlZCBidXR0b24tZW5lcmdpemVkLTkwMCBkcm9wXCI+PGkgY2xhc3M9XCJpY29uIGlvbi1oZWFydFwiPjwvaT48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkdGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFiLWdhbGxlcnknKS5jbGFzc0xpc3QudG9nZ2xlKCdvbicpO1xuICAgICAgICAgICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAuc3RhdGUoJ2FwcC5sb2dpbicsIHtcbiAgICAgICAgdXJsOiAnL2xvZ2luJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9sb2dpbi5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTG9naW5DdHJsJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdmYWJDb250ZW50Jzoge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIC5zdGF0ZSgnYXBwLnByb2ZpbGUnLCB7XG4gICAgICAgIHVybDogJy9wcm9maWxlJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9wcm9maWxlLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQcm9maWxlQ3RybCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZmFiQ29udGVudCc6IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzxidXR0b24gaWQ9XCJmYWItcHJvZmlsZVwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1mYWIgYnV0dG9uLWZhYi1ib3R0b20tcmlnaHQgYnV0dG9uLWVuZXJnaXplZC05MDBcIj48aSBjbGFzcz1cImljb24gaW9uLXBsdXNcIj48L2k+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoJHRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgLyokdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFiLXByb2ZpbGUnKS5jbGFzc0xpc3QudG9nZ2xlKCdvbicpO1xuICAgICAgICAgICAgICAgICAgICB9LCA4MDApOyovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICA7XG5cbiAgICAvLyBpZiBub25lIG9mIHRoZSBhYm92ZSBzdGF0ZXMgYXJlIG1hdGNoZWQsIHVzZSB0aGlzIGFzIHRoZSBmYWxsYmFja1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAvbG9naW4nKTtcbn0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIsIGRvY3VtZW50LCB3aW5kb3cgKi9cbid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ3N0YXJ0ZXIuY29udHJvbGxlcnMnLCBbXSlcblxuLmNvbnRyb2xsZXIoJ01vZHVsZXNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGVQYXJhbXMsICR0aW1lb3V0LCBpb25pY01hdGVyaWFsSW5rLCBpb25pY01hdGVyaWFsTW90aW9uKSB7XG4gICAgJHNjb3BlLiRwYXJlbnQuc2hvd0hlYWRlcigpO1xuICAgICRzY29wZS4kcGFyZW50LmNsZWFyRmFicygpO1xuICAgICRzY29wZS5pc0V4cGFuZGVkID0gdHJ1ZTtcbiAgICAkc2NvcGUuJHBhcmVudC5zZXRFeHBhbmRlZCh0cnVlKTtcbiAgICAkc2NvcGUuJHBhcmVudC5zZXRIZWFkZXJGYWIoZmFsc2UpO1xuXG4gICAgLy8gQWN0aXZhdGUgaW5rIGZvciBjb250cm9sbGVyXG5cbiAgICBpb25pY01hdGVyaWFsTW90aW9uLnB1c2hEb3duKHtcbiAgICAgICAgc2VsZWN0b3I6ICcucHVzaC1kb3duJ1xuICAgIH0pO1xuICAgIGlvbmljTWF0ZXJpYWxNb3Rpb24uZmFkZVNsaWRlSW5SaWdodCh7XG4gICAgICAgIHNlbGVjdG9yOiAnLmFuaW1hdGUtZmFkZS1zbGlkZS1pbiAuaXRlbSdcbiAgICB9KTtcbn0pXG5cbi5jb250cm9sbGVyKCdUaWNrZXRpbmdDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGVQYXJhbXMsICR0aW1lb3V0LCBpb25pY01hdGVyaWFsSW5rLCBpb25pY01hdGVyaWFsTW90aW9uKSB7XG4gICAgJHNjb3BlLiRwYXJlbnQuc2hvd0hlYWRlcigpO1xuICAgICRzY29wZS4kcGFyZW50LmNsZWFyRmFicygpO1xuICAgICRzY29wZS5pc0V4cGFuZGVkID0gdHJ1ZTtcbiAgICAkc2NvcGUuJHBhcmVudC5zZXRFeHBhbmRlZCh0cnVlKTtcbiAgICAkc2NvcGUuJHBhcmVudC5zZXRIZWFkZXJGYWIoZmFsc2UpO1xuXG4gICAgLy8gQWN0aXZhdGUgaW5rIGZvciBjb250cm9sbGVyXG5cbiAgICBpb25pY01hdGVyaWFsTW90aW9uLnB1c2hEb3duKHtcbiAgICAgICAgc2VsZWN0b3I6ICcucHVzaC1kb3duJ1xuICAgIH0pO1xuICAgIGlvbmljTWF0ZXJpYWxNb3Rpb24uZmFkZVNsaWRlSW5SaWdodCh7XG4gICAgICAgIHNlbGVjdG9yOiAnLmFuaW1hdGUtZmFkZS1zbGlkZS1pbiAuaXRlbSdcbiAgICB9KTtcbn0pXG5cbi5jb250cm9sbGVyKCdBcHBDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkaW9uaWNNb2RhbCwgJGlvbmljUG9wb3ZlciwgJHRpbWVvdXQpIHtcbiAgICAvLyBGb3JtIGRhdGEgZm9yIHRoZSBsb2dpbiBtb2RhbFxuICAgICRzY29wZS5sb2dpbkRhdGEgPSB7fTtcbiAgICAkc2NvcGUuaXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgICRzY29wZS5oYXNIZWFkZXJGYWJMZWZ0ID0gZmFsc2U7XG4gICAgJHNjb3BlLmhhc0hlYWRlckZhYlJpZ2h0ID0gZmFsc2U7XG5cbiAgICB2YXIgbmF2SWNvbnMgPSA8YW55PmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lvbi1uYXZpY29uJyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hdkljb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5hdkljb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gTGF5b3V0IE1ldGhvZHNcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAkc2NvcGUuaGlkZU5hdkJhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAoPEhUTUxFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpb24tbmF2LWJhcicpWzBdKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2hvd05hdkJhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAoPEhUTUxFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpb24tbmF2LWJhcicpWzBdKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9O1xuXG4gICAgJHNjb3BlLm5vSGVhZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lvbi1jb250ZW50Jyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvbnRlbnRbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtaGVhZGVyJykpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50W2ldLmNsYXNzTGlzdC50b2dnbGUoJ2hhcy1oZWFkZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkc2NvcGUuc2V0RXhwYW5kZWQgPSBmdW5jdGlvbihib29sKSB7XG4gICAgICAgICRzY29wZS5pc0V4cGFuZGVkID0gYm9vbDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnNldEhlYWRlckZhYiA9IGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAgIHZhciBoYXNIZWFkZXJGYWJMZWZ0ID0gZmFsc2U7XG4gICAgICAgIHZhciBoYXNIZWFkZXJGYWJSaWdodCA9IGZhbHNlO1xuXG4gICAgICAgIHN3aXRjaCAobG9jYXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGhhc0hlYWRlckZhYkxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIGhhc0hlYWRlckZhYlJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgICRzY29wZS5oYXNIZWFkZXJGYWJMZWZ0ID0gaGFzSGVhZGVyRmFiTGVmdDtcbiAgICAgICAgJHNjb3BlLmhhc0hlYWRlckZhYlJpZ2h0ID0gaGFzSGVhZGVyRmFiUmlnaHQ7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNIZWFkZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW9uLWNvbnRlbnQnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWNvbnRlbnRbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtaGVhZGVyJykpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50W2ldLmNsYXNzTGlzdC50b2dnbGUoJ2hhcy1oZWFkZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICRzY29wZS5oaWRlSGVhZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5oaWRlTmF2QmFyKCk7XG4gICAgICAgICRzY29wZS5ub0hlYWRlcigpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2hvd0hlYWRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuc2hvd05hdkJhcigpO1xuICAgICAgICAkc2NvcGUuaGFzSGVhZGVyKCk7XG4gICAgfTtcblxuICAgICRzY29wZS5jbGVhckZhYnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGZhYnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidXR0b24tZmFiJyk7XG4gICAgICAgIGlmIChmYWJzLmxlbmd0aCAmJiBmYWJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGZhYnNbMF0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSlcblxuLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHRpbWVvdXQsICRzdGF0ZVBhcmFtcywgaW9uaWNNYXRlcmlhbEluaykge1xuICAgICRzY29wZS4kcGFyZW50LmNsZWFyRmFicygpO1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuJHBhcmVudC5oaWRlSGVhZGVyKCk7XG4gICAgfSwgMCk7XG4gICAgaW9uaWNNYXRlcmlhbEluay5kaXNwbGF5RWZmZWN0KCk7XG59KVxuXG4uY29udHJvbGxlcignRnJpZW5kc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZVBhcmFtcywgJHRpbWVvdXQsIGlvbmljTWF0ZXJpYWxJbmssIGlvbmljTWF0ZXJpYWxNb3Rpb24pIHtcbiAgICAvLyBTZXQgSGVhZGVyXG4gICAgJHNjb3BlLiRwYXJlbnQuc2hvd0hlYWRlcigpO1xuICAgICRzY29wZS4kcGFyZW50LmNsZWFyRmFicygpO1xuICAgICRzY29wZS4kcGFyZW50LnNldEhlYWRlckZhYignbGVmdCcpO1xuXG4gICAgLy8gRGVsYXkgZXhwYW5zaW9uXG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5pc0V4cGFuZGVkID0gdHJ1ZTtcbiAgICAgICAgJHNjb3BlLiRwYXJlbnQuc2V0RXhwYW5kZWQodHJ1ZSk7XG4gICAgfSwgMzAwKTtcblxuICAgIC8vIFNldCBNb3Rpb25cbiAgICBpb25pY01hdGVyaWFsTW90aW9uLmZhZGVTbGlkZUluUmlnaHQoKTtcblxuICAgIC8vIFNldCBJbmtcbiAgICBpb25pY01hdGVyaWFsSW5rLmRpc3BsYXlFZmZlY3QoKTtcbn0pXG5cbi5jb250cm9sbGVyKCdQcm9maWxlQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlUGFyYW1zLCAkdGltZW91dCwgaW9uaWNNYXRlcmlhbE1vdGlvbiwgaW9uaWNNYXRlcmlhbEluaykge1xuICAgIC8vIFNldCBIZWFkZXJcbiAgICAkc2NvcGUuJHBhcmVudC5zaG93SGVhZGVyKCk7XG4gICAgJHNjb3BlLiRwYXJlbnQuY2xlYXJGYWJzKCk7XG4gICAgJHNjb3BlLmlzRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAkc2NvcGUuJHBhcmVudC5zZXRFeHBhbmRlZChmYWxzZSk7XG4gICAgJHNjb3BlLiRwYXJlbnQuc2V0SGVhZGVyRmFiKGZhbHNlKTtcblxuICAgIC8vIFNldCBNb3Rpb25cbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgaW9uaWNNYXRlcmlhbE1vdGlvbi5zbGlkZVVwKHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLnNsaWRlLXVwJ1xuICAgICAgICB9KTtcbiAgICB9LCAzMDApO1xuXG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlvbmljTWF0ZXJpYWxNb3Rpb24uZmFkZVNsaWRlSW5SaWdodCh7XG4gICAgICAgICAgICBzdGFydFZlbG9jaXR5OiAzMDAwXG4gICAgICAgIH0pO1xuICAgIH0sIDcwMCk7XG5cbiAgICAvLyBTZXQgSW5rXG4gICAgaW9uaWNNYXRlcmlhbEluay5kaXNwbGF5RWZmZWN0KCk7XG59KVxuXG4uY29udHJvbGxlcignQWN0aXZpdHlDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGVQYXJhbXMsICR0aW1lb3V0LCBpb25pY01hdGVyaWFsTW90aW9uLCBpb25pY01hdGVyaWFsSW5rKSB7XG4gICAgJHNjb3BlLiRwYXJlbnQuc2hvd0hlYWRlcigpO1xuICAgICRzY29wZS4kcGFyZW50LmNsZWFyRmFicygpO1xuICAgICRzY29wZS5pc0V4cGFuZGVkID0gdHJ1ZTtcbiAgICAkc2NvcGUuJHBhcmVudC5zZXRFeHBhbmRlZCh0cnVlKTtcbiAgICAkc2NvcGUuJHBhcmVudC5zZXRIZWFkZXJGYWIoJ3JpZ2h0Jyk7XG5cbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgaW9uaWNNYXRlcmlhbE1vdGlvbi5mYWRlU2xpZGVJbih7XG4gICAgICAgICAgICBzZWxlY3RvcjogJy5hbmltYXRlLWZhZGUtc2xpZGUtaW4gLml0ZW0nXG4gICAgICAgIH0pO1xuICAgIH0sIDIwMCk7XG5cbiAgICAvLyBBY3RpdmF0ZSBpbmsgZm9yIGNvbnRyb2xsZXJcbiAgICBpb25pY01hdGVyaWFsSW5rLmRpc3BsYXlFZmZlY3QoKTtcbn0pXG5cbi5jb250cm9sbGVyKCdHYWxsZXJ5Q3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlUGFyYW1zLCAkdGltZW91dCwgaW9uaWNNYXRlcmlhbEluaywgaW9uaWNNYXRlcmlhbE1vdGlvbikge1xuICAgICRzY29wZS4kcGFyZW50LnNob3dIZWFkZXIoKTtcbiAgICAkc2NvcGUuJHBhcmVudC5jbGVhckZhYnMoKTtcbiAgICAkc2NvcGUuaXNFeHBhbmRlZCA9IHRydWU7XG4gICAgJHNjb3BlLiRwYXJlbnQuc2V0RXhwYW5kZWQodHJ1ZSk7XG4gICAgJHNjb3BlLiRwYXJlbnQuc2V0SGVhZGVyRmFiKGZhbHNlKTtcblxuICAgIC8vIEFjdGl2YXRlIGluayBmb3IgY29udHJvbGxlclxuICAgIGlvbmljTWF0ZXJpYWxJbmsuZGlzcGxheUVmZmVjdCgpO1xuXG4gICAgaW9uaWNNYXRlcmlhbE1vdGlvbi5wdXNoRG93bih7XG4gICAgICAgIHNlbGVjdG9yOiAnLnB1c2gtZG93bidcbiAgICB9KTtcbiAgICBpb25pY01hdGVyaWFsTW90aW9uLmZhZGVTbGlkZUluUmlnaHQoe1xuICAgICAgICBzZWxlY3RvcjogJy5hbmltYXRlLWZhZGUtc2xpZGUtaW4gLml0ZW0nXG4gICAgfSk7XG5cbn0pXG5cbjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
