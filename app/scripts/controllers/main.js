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

    /*var database = firebase.database();

    // Example to set Firebase
    function writeUserData(userId, name, email, imageUrl) {
      firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
      });
    }

    writeUserData('chuckrocks', 'Charles', 'csipe84@seattleu.edu', 'http://portfolio.charlessipe.com/portfolio/images/charles-sipe-pic.jpg')

    console.log("writeUserData"); */


  });
