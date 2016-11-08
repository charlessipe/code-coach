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

    $scope.newProfile = function (){
      firebase.database().ref('users/' + $scope.userName).set({
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        bio: $scope.newBio,
        avail: $scope.newAvail,
        areas: $scope.newAreas,
        image: $scope.newImage,
        portfolio: $scope.newPortfolio,
        twitter: $scope.newTwitter
      });  

      $scope.userName = "";
      $scope.firstName = "";
      $scope.lastName = "";
      $scope.newBio = "";
      $scope.newAvail = "";
      $scope.newAreas = "";
      $scope.newImage = "";
      $scope.newPortfolio = "";
      $scope.newTwitter = "";
    
    } // end newProfile


    // Points to the root reference
    var storageRef = firebase.storage().ref();

    // Points to 'images'
    var imagesRef = storageRef.child('images');

    // Points to 'images/space.jpg'
    // Note that you can use variables to create child values
    //var fileName = '../images/charles-profile-pic.jpg';
    //var spaceRef = imagesRef.child(fileName);

    // File path is 'images/space.jpg'
    //var path = spaceRef.fullPath

    // File name is 'space.jpg'
    //var name = spaceRef.name

    // Points to 'images'
    //var imagesRef = spaceRef.parent;
    

    // from Firebase Storage Quickstart

    $scope.handleFileSelect = function(file) {
      var file = document.getElementById('file').files[0]; //evt.target.files[0];
      var metadata = {
        'contentType': file.type
      };
      // Push to child path.
      // [START oncomplete]
      storageRef.child('images/' + file.name).put(file, metadata).then(function(snapshot) {
        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
        console.log(snapshot.metadata);
        var url = snapshot.metadata.downloadURLs[0];
        console.log('File available at', url);
        // [START_EXCLUDE]
        document.getElementById('linkbox').innerHTML = '<a href="' +  url + '">Click For File</a>';
        // [END_EXCLUDE]
      }).catch(function(error) {
        // [START onfailure]
        console.error('Upload failed:', error);
        // [END onfailure]
      });
      // [END oncomplete]
    }
    
    /*window.onload = function() {
      document.getElementById('file').addEventListener('change', handleFileSelect, true); //false event bubbling
      //document.getElementById('file').disabled = true;
      
      auth.onAuthStateChanged(function(user) {
        if (user) {
          console.log('Anonymous user signed-in.', user);
          document.getElementById('file').disabled = false;
        } else {
          console.log('There was no anonymous session. Creating a new anonymous user.');
          // Sign the user in anonymously since accessing Storage requires the user to be authorized.
          auth.signInAnonymously();
        }
      });
    }*/

  });
