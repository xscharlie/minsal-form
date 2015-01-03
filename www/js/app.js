// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('main', ['ionic', 'ngMaterial','mainMenu','listForms', 'forms'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'mainMenu'
  })
    .state('app.list', {
      url: "/menu",
      views: {
        'menuContent': {
          templateUrl: "templates/list-forms.html",
          controller: 'listForms'
        }
      }
    })
    .state('app.f1', {
      url: "/form/1",
      views: {
        'menuContent': {
          templateUrl: "templates/F1.html",
          controller: 'form1'
        }
      }
    })    
    .state('app.f2', {
      url: "/form/2",
      views: {
        'menuContent': {
          templateUrl: "templates/F2.html",
          controller: 'form2'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/menu');
});
