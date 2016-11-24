'use strict';

/**
 * @ngdoc function
 * @name rankedResourcesApp.controller:ContactCoachCtrl
 * @description
 * # ContactCoachCtrl
 * Controller of the rankedResourcesApp
 */
angular.module('rankedResourcesApp')
  .controller('ContactCoachCtrl', function ($scope) {
    
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

    $scope.contactCoach = function (){
      firebase.database().ref('messages/' + Date.now()).set({
        coachName: $scope.coachName,
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        email: $scope.currentUserEmail,
        message: $scope.newMessage
      });  

      $scope.coachName = "";
      $scope.firstName = "";
      $scope.lastName = "";
      $scope.newMessage = "";
      $scope.newEmail = "";
    
    } // end contactCoach

    



  });
