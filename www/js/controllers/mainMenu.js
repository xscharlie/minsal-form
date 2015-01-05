angular.module('mainMenu', [])

.controller('mainMenu', function($scope, $ionicModal, $timeout, $location) {
  $scope.recordVoice = function () {
  	// capture callback
	var captureSuccess = function(mediaFiles) {
	    var i, path, len;
	    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
	        path = mediaFiles[i].fullPath;
	        toast.showShort(path);
	    }
	};

	// capture error callback
	var captureError = function(error) {
	    alert('Error code: ' + error.code, null, 'Capture Error');
	};

	// start audio capture
	navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:1});
  }

});


// // Form data for the login modal
//   $scope.loginData = {};

//   // Create the login modal that we will use later
//   $ionicModal.fromTemplateUrl('templates/login.html', {
//     scope: $scope
//   }).then(function(modal) {
//     $scope.modal = modal;
//   });

//   // Triggered in the login modal to close it
//   $scope.closeLogin = function() {
//     $scope.modal.hide();
//   };

//   // Open the login modal
//   $scope.login = function() {
//     $scope.modal.show();
//   };

//   // Perform the login action when the user submits the login form
//   $scope.doLogin = function() {
//     console.log('Doing login', $scope.loginData);

//     // Simulate a login delay. Remove this and replace with your login
//     // code if using a login system
//     $timeout(function() {
//       $scope.closeLogin();
//     }, 1000);
//   };