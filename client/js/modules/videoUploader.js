(function(angular) {
  'use strict';
angular.module('videoUploader', ['ui.router', 'ngFileUpload'])
    
    .config(function($httpProvider) {
      $httpProvider.interceptors.push ('loaderInterceptorFactory');
    })

    .config(function($stateProvider, $urlRouterProvider) {
    
        $urlRouterProvider.otherwise("/all-videos");
    
        $stateProvider
        .state('upload-video', {
          url: "/upload-video",
          templateUrl: "./client/views/pages/uploadVideo.html",
          controller: 'uploadVideoController'
        })
        .state('all-videos', {
          url: "/all-videos",
          templateUrl: "./client/views/pages/allVideos.html",
          controller: 'allVideosController',
          resolve: {
            allVideosData: function(videosService) {
              return videosService.getVideos('all');
            }
          }
        })
        .state('approved-videos', {
          url: "/approved-videos",
          templateUrl: "./client/views/pages/approvedVideos.html",
          controller: 'approvedVideosController',
          resolve: {
            approvedVideosData: function(videosService) {
              return videosService.getVideos('approved');
            }
          }
        })
    })

    .run(function($state, $rootScope) {
        $rootScope.$state = $state;
    });
    

})(window.angular);