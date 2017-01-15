<?php
    session_start();
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    // error_reporting(0);

    $dbHost     = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName     = "bigjapps_vu";
    $whitelist = array(
        '127.0.0.1',
        '::1'
    );

    if(!in_array($_SERVER['REMOTE_ADDR'], $whitelist)) {
    	$dbHost     = "localhost";
	    $dbUsername = "bigjapps_admin";
	    $dbPassword = "asdASD123!@#";
	    $dbName     = "bigjapps_vu";
    }

    require('./config/dbConfig.php');
    require('./config/miscMethods.php');
    require('./api/videoUploader.php');
?>