(function(angular) {
  'use strict';
angular.module('videoUploader')
    .controller('approvedVideosController', function($scope, approvedVideosData) {
    	$scope.approvedVideos = approvedVideosData.data;
    });
})(window.angular);