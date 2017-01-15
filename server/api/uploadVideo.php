<?php            
    $validObj = new stdClass();

    $validObj->validAll = 1;
    
    $target_dir = "videos/";
    $target_file = $target_dir . strtotime("now") . basename($_FILES["file"]["name"]);

    if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
        $dbConfig = new dbConfig();
        $dbConfig->dbConnect();

        $miscMethods = new miscMethods();

        $videoSql = "INSERT INTO videos (path,";
        $videoSql .= "name,"; 
        $videoSql .= "author,"; 
        $videoSql .= "description,"; 
        $videoSql .= "ip,"; 
        $videoSql .= "dttm)";
        $videoSql .= "VALUES ('server/".$target_file."',";
        $videoSql .= "'".$_POST["videoDetails"]["name"]."',";
        $videoSql .= "'".$_POST["videoDetails"]["author"]."',";
        if(isset($_POST["videoDetails"]["description"]))
            $videoSql .= "'".$_POST["videoDetails"]["description"]."',";
        $videoSql .= "'".$miscMethods->getIP()."',";
        $videoSql .= "'".$miscMethods->getDTTM()."')";
        
        $dbConfig->dbQuery($videoSql);
    } else {
        $validObj->validAll = 0;
    }

    $returnObj = $validObj;
?>