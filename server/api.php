<?php

    require('./config/config.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);


    $videoUploader = new videoUploader();

    switch($_GET['api']) {
        case 'uploadVideo':
            print_r(json_encode($videoUploader->uploadVideo()));
            break;

        case 'getVideos':
            print_r(json_encode($videoUploader->getVideos()));
            break;

        case 'approveVideo':
            print_r(json_encode($videoUploader->approveVideo($obj)));
            break;
    }
?>