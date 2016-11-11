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
    

    $scope.contactCoach = function (){
      firebase.database().ref('messages/' + Date.now()).set({
        coachName: $scope.coachName,
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        email: $scope.newEmail,
        message: $scope.newMessage
      });  

      $scope.coachName = "";
      $scope.firstName = "";
      $scope.lastName = "";
      $scope.newMessage = "";
      $scope.newEmail = "";
    
    } // end contactCoach



  });
