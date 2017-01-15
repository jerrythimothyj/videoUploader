(function(angular) {
  'use strict';
angular.module('videoUploader')
    .controller('allVideosController', function($scope, allVideosData) {
    	$scope.allVideos = allVideosData.data;
    });
})(window.angular);