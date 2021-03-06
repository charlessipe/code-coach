'use strict';

/**
 * @ngdoc function
 * @name rankedResourcesApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the rankedResourcesApp
 */
angular.module('rankedResourcesApp')
  .controller('DashboardCtrl', function ($scope) {
    
    var user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: user.uid
      }).then(function() {
        $scope.currentUserEmail = user.email;
        $scope.currentUserId = user.uid;
        // Update successful.
      }, function(error) {
        // An error happened.
      }).then(function() {
        console.log("Current User is:" + user.uid);
        console.log("Current Email is:" + user.email);
        $scope.updateDashboard();
      }, function(error) {
        // An error happened.
      });

    /* Use firebase.auth().currentUser instead 
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
    */

    $scope.updateDashboard = function(){

    $scope.studentData = function (){
      firebase.database().ref('students/' + 'student1').set({
        messages: 'session1',
        sessions: 'meeting1',
        favorites: 'favorites',
      });  
    
    } // end studentData


    // Add message to student1 messages
    $scope.messagesData = function (){
      firebase.database().ref('students/' + $scope.currentUserId + '/messages/' + Date.now()).set({
        message: $scope.newMessage,
        messageName: $scope.messageName,
        messageDate: moment.unix(Date.now()).format("MMM DD h:mm A")
      });

      $scope.newMessage = "";
      $scope.messageName = "";  
    
    } // end studentData

    // Add session to student1 sessions
    $scope.sessionData = function (){
      firebase.database().ref('students/' + $scope.currentUserId + '/sessions/' + Date.now()).set({
        sessionDate: $scope.sessionDate,
        sessionTime: $scope.sessionTime
      });

      $scope.sessionDate = ""; 
      $scope.sessionTime = "";
    
    } // end studentData


    // Get a reference to the database service
    var database = firebase.database();

    // Listen for value events
    var userData = firebase.database().ref('students/');
      userData.on('value', function(snapshot) {
        console.log(snapshot.val());
        
        $scope.students = snapshot.val();
        $scope.$apply();

        console.log($scope.students["student1"].messages + " " + $scope.students["student1"].session + " " + $scope.students["student1"].favorites);
    });

    var messageData = firebase.database().ref('students/' + $scope.currentUserId + '/messages/');
      messageData.on('value', function(snapshot) {
        console.log(snapshot.val());
        
        $scope.messageList = snapshot.val();
        //$scope.$apply();
    });

    var favoriteData = firebase.database().ref('students/' + $scope.currentUserId + '/favorites/');
      favoriteData.on('value', function(snapshot) {
        console.log(snapshot.val());
        
        $scope.favoriteList = snapshot.val();
        //$scope.$apply();
    });

    var sessionList = firebase.database().ref('students/' + $scope.currentUserId + '/sessions/');
      sessionList.on('value', function(snapshot) {
        console.log(snapshot.val());
        
        $scope.sessionList = snapshot.val();
        //$scope.$apply();
    });    

    } // end updateDashboard

  });
