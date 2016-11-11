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

    $scope.studentData = function (){
      firebase.database().ref('students/' + 'student1').set({
        messages: 'session1',
        sessions: 'meeting1',
        favorites: 'favorites',
      });  
    
    } // end studentData


    // Add message to student1 messages
    $scope.messagesData = function (){
      firebase.database().ref('students/student1/messages/' + Date.now()).set({
        message: $scope.newMessage,
        messageName: $scope.messageName,
        messageDate: moment.unix(Date.now()).format("MMM DD h:mm A")
      });

      $scope.newMessage = "";
      $scope.messageName = "";  
    
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

    var messageData = firebase.database().ref('students/student1/messages/');
      messageData.on('value', function(snapshot) {
        console.log(snapshot.val());
        
        $scope.messageList = snapshot.val();
        //$scope.$apply();



    });


  });
