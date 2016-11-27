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

  // Save coach name to Firebase db when button clicked
  $scope.saveCoach = function(index){

    console.log("Coach number " + index + " added");
    alert("Coach number " + index + " added");
    alert($scope.currentUserId);
    alert($scope.usersArray[index].firstName + " " + $scope.usersArray[index].lastName); // get first name of coach
  
    var favoriteData = firebase.database().ref('students/' + $scope.currentUserId + '/favorites/');
        favoriteData.on('value', function(snapshot) {
          $scope.favoriteList = snapshot.val();
          console.log($scope.favoriteList);
    });
    console.log($scope.favoriteList);
    
    for (var key in $scope.favoriteList) {
      console.log($scope.favoriteList[key].name);

      if (($scope.usersArray[index].firstName + " " + $scope.usersArray[index].lastName) == $scope.favoriteList[key].name){
        console.log("Duplicate found!");
      }
      else {
        console.log("No duplicate");
        // set Firebase coach's name
        // store favorite coach name in Firebase db
        firebase.database().ref('students/' + $scope.currentUserId + '/favorites/' + Date.now()).set({
          name: $scope.usersArray[index].firstName + " " + $scope.usersArray[index].lastName,
          favoriteDate: moment.unix(Date.now()).format("MMM DD h:mm A")
          }); 
      } 
    }  // end for loop
    
  } // end saveCoach


  //console.log("User list" + $scope.users[1]);

  });
