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
      .when('/coach-profile', {
        templateUrl: 'views/coach-profile.html',
        controller: 'CoachProfileCtrl',
        controllerAs: 'coachProfile'
      })
      .when('/rails-coaches', {
        templateUrl: 'views/rails-coaches.html',
        controller: 'RailsCoachesCtrl',
        controllerAs: 'railsCoaches'
      })
      .when('/contact-coach', {
        templateUrl: 'views/contact-coach.html',
        controller: 'ContactCoachCtrl',
        controllerAs: 'contactCoach'
      })
      .when('/sign-up', {
        templateUrl: 'views/sign-up.html',
        controller: 'SignUpCtrl',
        controllerAs: 'signUp'
      })
      .when('/log-in', {
        templateUrl: 'views/log-in.html',
        controller: 'LogInCtrl',
        controllerAs: 'logIn'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
