(function(angular){
	'use strict';
	angular.module('videoUploader')
			.directive('navbar', () => {
				return {
					restrict: 'E',
					templateUrl: './client/views/components/navbar.html',
					controller: 'navbarController'
				}
			});
})(window.angular);