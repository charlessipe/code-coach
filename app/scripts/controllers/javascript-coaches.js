'use strict';

/**
 * @ngdoc function
 * @name rankedResourcesApp.controller:JavascriptCoachesCtrl
 * @description
 * # JavascriptCoachesCtrl
 * Controller of the rankedResourcesApp
 */
angular.module('rankedResourcesApp')
  .controller('JavascriptCoachesCtrl', function ($scope) {
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

      //$scope.$apply()

      $scope.usersArray = [];
      $scope.currentFilter = "javascript";

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

      //console.log("Coach1: " + $scope.users["andyj"].firstName + " " + $scope.users["andyj"].lastName + " " + $scope.users["andyj"].bio);
    });


  $scope.checkLoginStatus = function(){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(user);
          $scope.currentUserEmail = user.email;
          $scope.currentUserId = user.uid;
          console.log($scope.currentUserEmail);
          console.log($scope.currentUserId);
          //$scope.permissions(); // call permissions function
          $scope.$apply();
        } else {
          console.log("Please log into your account");
        }
      });
    }() // end checkLoginStatus 


  $scope.saveCoach = function($index){
    console.log("Coach number " + $index + " added");
    alert("Coach number " + $index + " added");
  }

  //console.log("User list" + $scope.users[1]);

  });
