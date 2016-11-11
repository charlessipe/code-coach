'use strict';

/**
 * @ngdoc function
 * @name rankedResourcesApp.controller:CoachProfileCtrl
 * @description
 * # CoachProfileCtrl
 * Controller of the rankedResourcesApp
 */
angular.module('rankedResourcesApp')
  .controller('CoachProfileCtrl', function ($scope) {


    // Get a reference to the database service
    var database = firebase.database();

    // Listen for value events
    var userData = firebase.database().ref('users/');
      userData.on('value', function(snapshot) {
        console.log(snapshot.val());
        
        $scope.users = snapshot.val();
        $scope.$apply();

        console.log("Coach1: " + $scope.users["andyj"].firstName + " " + $scope.users["andyj"].lastName + " " + $scope.users["andyj"].bio);
      });

  });
