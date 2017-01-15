(function(angular) {
  'use strict';
angular.module('videoUploader')
    .controller('videoPanelController', function($scope, videosService) {
    	$scope.stopVideo = () => {
    		$('#videoPanel').find('video')[0].pause();
    	}

    	$scope.approveVideo = (sl) => {
    		videosService.approveVideo(sl).then(() => {
    			$scope.selVideo.approved = 1;
    		})
    	}
    });
})(window.angular);