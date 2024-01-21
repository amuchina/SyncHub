<?php
header('Access-Control-Allow-Origin: *');

require 'functions.php';
  
includeEnv();

$c = newConnection();

addUserFromPost();
?>
