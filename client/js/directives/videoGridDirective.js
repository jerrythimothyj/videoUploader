(function(angular){
	'use strict';
	angular.module('videoUploader')
			.directive('videoGrid', () => {
				return {
					restrict: 'E',
					templateUrl: './client/views/components/videoGrid.html',
					controller: 'videoGridController',
					scope: {
						videos: '='
					}
				}
			});
})(window.angular);