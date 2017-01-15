(function(angular) {
  'use strict';
angular.module('videoUploader')
    .service('videosService', function($http) {
        this.getVideos = (type) => {
            return $http({
              method: 'GET',
              url: './server/api.php?api=getVideos&type=' + type
            });
        }
        
        this.approveVideo = (sl) => {
          console.log(sl);
            return $http({
              method: 'POST',
              url: './server/api.php?api=approveVideo',
              data: {
                sl: sl
              }
            });
        }
    });
})(window.angular);