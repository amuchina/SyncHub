<?php
if(!empty($_SESSION)){
    session_start();
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

require 'functions.php';

if(!empty($_POST)){
    echo $_POST['email'];
}else{
    echo var_dump($_POST);
}
?>