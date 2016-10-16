'use strict';

/**
 * @ngdoc function
 * @name rankedResourcesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rankedResourcesApp
 */
angular.module('rankedResourcesApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.userName = "Charles";

  });