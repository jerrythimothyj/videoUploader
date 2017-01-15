<?php
    class miscMethods {
        function getIP() {
            return $_SERVER['REMOTE_ADDR'];
        }
        
        function getDTTM() {
            date_default_timezone_set('Asia/Kolkata');
            return date("l jS \of F Y h:i:s A");
        }
    }
?>