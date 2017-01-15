(function(angular) {
  'use strict';
angular.module('videoUploader')
    .controller('uploadVideoController', function($scope, Upload, $timeout) {
    	$scope.uploadFiles = function(file) {
	        $scope.videoFile = file;
	        // if (file) {
	        //     file.upload = Upload.upload({
	        //         url: './server/api.php?api=uploadVideo',
	        //         data: {file: file}
	        //     });

	        //     file.upload.then(function (response) {
	        //         $timeout(function () {
	        //             file.result = response.data;
	        //         });
	        //     }, function (response) {
	        //         if (response.status > 0)
	        //             $scope.errorMsg = response.status + ': ' + response.data;
	        //     }, function (evt) {
	        //         file.progress = Math.min(100, parseInt(100.0 * 
	        //                                  evt.loaded / evt.total));
	        //     });
	        // }
	    }

	    $scope.uploadVideo = () => {
	    	$scope.uploadSuccessful = 0;
	    	$scope.allDetailsValidation = 0;
	    	if($scope.video && 
	    		$scope.video.name != "" 
	    		&& $scope.video.author != "" 
	    		&& $scope.videoFile) {
				Upload.upload({
	                url: './server/api.php?api=uploadVideo',
	                data: {
	                	file: $scope.videoFile,
	                	videoDetails: $scope.video
	                }
	            }).then(
	            	(response) => {
	            		$scope.uploadSuccessful = 1;
		                $scope.video.name = "";
		                $scope.video.description = "";
		                $scope.video.author = "";
		                $scope.videoFile = {};
	            	},
	            	(response) => {
		                if (response.status > 0)
		                    $scope.errorMsg = response.status + ': ' + response.data;
	            	},
	            	(evt) => {
		                $scope.videoFile.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	            	}
	     		);
	     	}
	     	else {
	     		$scope.allDetailsValidation = 1;
	     	}

    	}

    });
})(window.angular);