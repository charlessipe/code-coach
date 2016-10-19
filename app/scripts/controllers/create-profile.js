'use strict';

/**
 * @ngdoc function
 * @name rankedResourcesApp.controller:CreateProfileCtrl
 * @description
 * # CreateProfileCtrl
 * Controller of the rankedResourcesApp
 */
angular.module('rankedResourcesApp')
  .controller('CreateProfileCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    /*function writeUserData(userId, name, email, imageUrl) {
      firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
      });
    }

    writeUserData('chuckrocks', 'Chuck Spark', 'csipe84@seattleu.edu', 'http://portfolio.charlessipe.com/portfolio/images/charles-sipe-pic.jpg')*/


    $scope.newProfile = function (){
      firebase.database().ref('users/' + $scope.userName).set({
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        bio: $scope.newBio
      });  

      $scope.userName = "";
      $scope.firstName = "";
      $scope.lastName = "";
      $scope.newBio = "";
    }


  });
