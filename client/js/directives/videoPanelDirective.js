(function(angular){
	'use strict';
	angular.module('videoUploader')
			.directive('videoPanel', () => {
				return {
					restrict: 'E',
					templateUrl: './client/views/components/videoPanel.html',
					controller: 'videoPanelController'
				}
			});
})(window.angular);