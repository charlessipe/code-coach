'use strict';

/**
 * @ngdoc overview
 * @name rankedResourcesApp
 * @description
 * # rankedResourcesApp
 *
 * Main module of the application.
 */
angular
  .module('rankedResourcesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/learning-javascript', {
        templateUrl: 'views/learning-javascript.html',
        controller: 'LearningJavascriptCtrl',
        controllerAs: 'learningJavascript'
      })
      .when('/create-profile', {
        templateUrl: 'views/create-profile.html',
        controller: 'CreateProfileCtrl',
        controllerAs: 'createProfile'
      })
      .when('/javascript-coaches', {
        templateUrl: 'views/javascript-coaches.html',
        controller: 'JavascriptCoachesCtrl',
        controllerAs: 'javascriptCoaches'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
