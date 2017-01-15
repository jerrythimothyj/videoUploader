<?php
    $validObj = new stdClass();

    $validObj->validAll = 1;

		$dbConfig = new dbConfig();
    $dbConfig->dbConnect();

    $videoSql = "UPDATE videos ";
    $videoSql .= "SET approved='1' ";
    $videoSql .= " WHERE sl='".$obj->sl."'";

    $dbResult = $dbConfig->dbQuery($videoSql);

  	$returnObj  = $validObj;
?>