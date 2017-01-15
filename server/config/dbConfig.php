<?php

    class dbConfig {
        private $dbCon;
        
        function dbConnect() {
            $this->dbCon = mysqli_connect($GLOBALS['dbHost'],$GLOBALS['dbUsername'],$GLOBALS['dbPassword'],$GLOBALS['dbName']);

            // Check connection
            if (mysqli_connect_errno()) {
                // echo "Failed to connect to MySQL: " . mysqli_connect_error();
                echo "Failed to connect to MySQL";
            }
        }
        
        function dbQuery($sql) {
            return $this->dbCon->query($sql);
        }
    }
?>