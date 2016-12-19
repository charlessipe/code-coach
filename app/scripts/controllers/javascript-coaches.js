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

  $scope.highlightStar = false;

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

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        $scope.currentUserEmail = user.email;
        $scope.currentUserId = user.uid;
        //$scope.permissions(); // call permissions function
        
        // retrieve favorites from logged in user, and also when new favorites are added
        var favoriteData = firebase.database().ref('students/' + $scope.currentUserId + '/favorites/');
        favoriteData.on('value', function(snapshot) {
          $scope.favoriteList = snapshot.val();
          console.log('$scope.favoriteList in once', $scope.favoriteList);
        });  

        $scope.$apply();
      } else {
    }

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
    var coach = $scope.usersArray[index];
    var coachName = coach.firstName + " " + coach.lastName;
    alert(coachName + " added to Favorites"); // alert full name of coach

    var isNameInList = false;
    for (var key in $scope.favoriteList) {
      if (coachName == $scope.favoriteList[key].name){
        console.log("Duplicate found!");
        console.log($scope.favoriteList[key].name);
        isNameInList = true;
      }
    } 
    // end for loop

    // only set name and store in DB if 'isNameInList' is false
    if (!isNameInList) {
    // set Firebase coach's name
    // store favorite coach name in Firebase db
      firebase.database().ref('students/' + $scope.currentUserId + '/favorites/' + Date.now()).set({
        name: coachName,
        favoriteDate: moment.unix(Date.now()).format("MMM DD h:mm A")
      }); 
    }
    else {
      alert('Already in Your Favorites');
    }

  } // end saveCoach



  // highlight saved coaches 
  $scope.highlightFavs = function(){
    console.log("highlight favs");
    
    setTimeout(function(){ 

      // names on the page
      var i;
      for(i = 0; i < $scope.usersArray.length; i++){
        //console.log(i + " " + $scope.usersArray[i].firstName + " " + $scope.usersArray[i].lastName);
      
        // names that are favorited
        for (var key in $scope.favoriteList) {
          if ($scope.favoriteList[key].name == $scope.usersArray[i].firstName + " " + $scope.usersArray[i].lastName){
            //console.log("Yes!!!!!!! this one is favorited: " + $scope.favoriteList[key].name)
            console.log(i + " " + $scope.usersArray[i].firstName + " " + $scope.usersArray[i].lastName + " is favorited")
            //$scope.highlightStar = true;
          } else {
            //console.log("No this one is not favorited: " + $scope.favoriteList[key].name); 
            //$scope.highlightStar = false;
          } 

        } // end for loop

      } // end for loop

      
  }, 1500);

  // class="{{highlightStar}}"

  };

  $scope.highlightFavs();

  //console.log("User list" + $scope.users[1]);

  });
