// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('main', ['ionic','mainMenu','listForms', 'forms'])

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

    function checkConnection() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        toast.showShort('Connection type: ' + states[networkState]);
        //alert('Connection type: ' + states[networkState]);
    }

    checkConnection();


    document.addEventListener("offline", onOffline, false);

    function onOffline() {
        toast.showShort('estas offline');
        //alert('estas offline');
    }

    document.addEventListener("online", onOnline, false);

    function onOnline() {
        toast.showShort('estas online');
        //alert('estas online');
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
    })
    .state('app.f3', {
      url: "/form/3",
      views: {
        'menuContent': {
          templateUrl: "templates/F3.html",
          controller: 'form3'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/menu');
});
