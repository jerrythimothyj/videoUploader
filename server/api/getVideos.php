<?php
    $validObj = new stdClass();

    $validObj->validAll = 1;

  		$dbConfig = new dbConfig();
      $dbConfig->dbConnect();

      $videoSql = "SELECT sl, path, name, author, description, approved, dttm FROM videos ";
      if($_GET['type'] == 'approved')
        $videoSql .= "WHERE approved='1'";
      $videoSql .= " ORDER BY sl DESC";

      $dbResult = $dbConfig->dbQuery($videoSql);

      $videoArr = [];

      $ictr=0;
      if ($dbResult->num_rows > 0) {
          while($dbRow = $dbResult->fetch_assoc()) {
              $videoArr[$ictr]['sl'] = $dbRow['sl'];
              $videoArr[$ictr]['path'] = $dbRow['path'];
              $videoArr[$ictr]['name'] = $dbRow['name'];
              $videoArr[$ictr]['author'] = $dbRow['author'];  
              $videoArr[$ictr]['description'] = $dbRow['description'];  
              $videoArr[$ictr]['approved'] = $dbRow['approved'];  
              $videoArr[$ictr]['dttm'] = $dbRow['dttm'];  

              $ictr++;
          }
      }

    	$returnObj  = $videoArr;
?>