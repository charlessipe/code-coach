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
        var userObject = snapshot.val();

        $scope.usersArray = [];
        $scope.currentFilter = "rails";

        // loop through Firebase object and push to array
        for (var key in userObject) {
          if (userObject.hasOwnProperty(key)) {
            // push Firebase objects to array
            //console.log(userObject[key]);
            $scope.usersArray.push(userObject[key]);

          }
        };

        console.log($scope.usersArray);

        $scope.$apply()
    });



  });
