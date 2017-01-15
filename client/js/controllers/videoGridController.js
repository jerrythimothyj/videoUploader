(function(angular) {
  'use strict';
angular.module('videoUploader')
    .controller('videoGridController', function($scope) {
    	$scope.selectedVideo = (video) => {
    		$scope.selVideo = video;
    	}
    });
})(window.angular);