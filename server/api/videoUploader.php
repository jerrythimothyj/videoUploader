<?php
    class videoUploader {
        function uploadVideo() {
            require('./api/uploadVideo.php');
            return $returnObj;
        }

        function getVideos() {
            require('./api/getVideos.php');
            return $returnObj;
        }

        function approveVideo($obj) {
            require('./api/approveVideo.php');
            return $returnObj;
        }
    }
?>