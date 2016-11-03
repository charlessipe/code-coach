'use strict';

/**
 * @ngdoc function
 * @name rankedResourcesApp.controller:LogInCtrl
 * @description
 * # LogInCtrl
 * Controller of the rankedResourcesApp
 */
angular.module('rankedResourcesApp')
  .controller('LogInCtrl', function ($scope) {


  $scope.logInUser = function(){
    console.log("start login");

    var loginEmail = $scope.loginEmail;
    var loginPassword = $scope.loginPassword;

    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(users.email);

    }).then(function(users) {  // then console.log login email and localId
      console.log(users.uid);
      console.log(users.email);
    });

  } // end logInUser



  $scope.getAuth = function(){

    var user = firebase.auth().currentUser;


    var name, email, photoUrl, uid;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                       // this value to authenticate with your backend server, if
                       // you have one. Use User.getToken() instead.
      $scope.currentUserId = uid;
      $scope.currentEmail = email;
    }

    console.log(name);
    console.log(email);
    console.log(uid);

    
    //$scope.$apply()


  }

  $scope.getAuth(); // call getAuth on page load

  $scope.logOut = function(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }, function(error) {
      // An error happened.
    });

    console.log("Logging out");
  }

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

  });
