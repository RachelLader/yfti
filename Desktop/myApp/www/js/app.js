// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'firebase', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'

        })
        // setup an abstract state for the tabs directive
        .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html',
            controller: 'LoginCtrl'

        })
        .state('register-next',{
          url:'/register-next',
          templateUrl:'templates/register2.html',
          controller:'LoginCtrl'
        })
        .state('register-final',{
          url:'/register-final',
          templateUrl:'templates/register3.html',
          controller:'LoginCtrl'
        })
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
        })

    // Each tab has its own nav history stack:

    .state('tab.events', {
            url: '/events',
            views: {
                'tab-events': {
                    templateUrl: 'templates/tab-events.html',
                    controller: 'EventsCtrl'
                }
            }
        })
        .state('tab.events-expand', {
            url: '/events/:eventId',
            views: {
                'tab-events': {
                    templateUrl: 'templates/event-expand.html',
                    controller: 'EventExpandCtrl'
                }
            }
        })
        .state('tab.photos', {
            url: '/photos',
            views: {
                'tab-photos': {
                    templateUrl: 'templates/tab-photos.html',
                    controller: 'PhotoCtrl'
                }
            }
        })
        // .state('tab.photo-detail', {
        //     url: '/chats/:chatId',
        //     views: {
        //         'tab-chats': {
        //             templateUrl: 'templates/chat-detail.html',
        //             controller: 'ChatDetailCtrl'
        //         }
        //     }
        // })

    .state('tab.account', {
        url: '/account',
        views: {
            'tab-account': {
                templateUrl: 'templates/tab-account.html',
                controller: 'AccountCtrl'
            }
        }
    });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

});