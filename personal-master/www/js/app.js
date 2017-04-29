// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'firebase', 'youtube-embed', '720kb.socialshare', 'hm.readmore', 'angularMoment'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
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
  var config = {
    apiKey: "AIzaSyBXhU4LBinZc77szCRL-eLbj16Msn3NR34",
    authDomain: "rendymarojahan-ae340.firebaseapp.com",
    databaseURL: "https://rendymarojahan-ae340.firebaseio.com",
    storageBucket: "rendymarojahan-ae340.appspot.com",
    messagingSenderId: "658043758885"
  };
  var fb = firebase.initializeApp(config);
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.rendy', {
    url: '/rendy',
    views: {
      'menuContent': {
        templateUrl: 'templates/rendy.html',
        controller: 'rendyCtrl'
      }
    }
  })

  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('app.project', {
    url: '/project/:projectId',
    views: {
      'menuContent': {
        templateUrl: 'templates/project.html',
        controller: 'projectCtrl'
      }
    }
  })
    

  .state('app.blog', {
    url: '/blog',
    views: {
      'menuContent': {
        templateUrl: 'templates/blog.html',
        controller: 'blogCtrl'
      }
    }
  })

  .state('app.detail', {
    url: '/detail/:detailId',
    views: {
      'menuContent': {
        templateUrl: 'templates/detail.html',
        controller: 'detailCtrl'
      }
    }
  })

  .state('app.carrier', {
    url: '/carrier/:carrierId',
    views: {
      'menuContent': {
        templateUrl: 'templates/carrier.html',
        controller: 'carrierCtrl'
      }
    }
  })

  .state('app.contact', {
    url: '/contact',
    views: {
      'menuContent': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      }
    }
  })

  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/rendy');
});
