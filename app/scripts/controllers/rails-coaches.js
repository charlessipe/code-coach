'use strict';

/**
 * @ngdoc function
 * @name rankedResourcesApp.controller:RailsCoachesCtrl
 * @description
 * # RailsCoachesCtrl
 * Controller of the rankedResourcesApp
 */
angular.module('rankedResourcesApp')
  .controller('RailsCoachesCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Get a reference to the database service
    var database = firebase.database();

    // Listen for value events
    var userData = firebase.database().ref('users/');
      userData.on('value', function(snapshot) {
        console.log(snapshot.val());
        
        $scope.users = snapshot.val();
        $scope.$apply()
    });

  });
