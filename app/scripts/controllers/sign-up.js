'use strict';

/**
 * @ngdoc function
 * @name rankedResourcesApp.controller:SignUpCtrl
 * @description
 * # SignUpCtrl
 * Controller of the rankedResourcesApp
 */
angular.module('rankedResourcesApp')
  .controller('SignUpCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.testString = "Hello this is a test string";

  $scope.createUser = function(){
      var email = $scope.userEmail;
      var password = $scope.userPassword;

      console.log(email);
      console.log(password);

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
  }  // end createUser
  

  });
