<?php
if(!empty($_SESSION)){
    session_start();
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

require 'functions.php';

includeEnv();

$c = newConnection();

$userData = array();

$username = $_POST['username'];
$password = $_POST['password'];

$response = fetchUserFromPost($username, $password);

if(count($response) > 2){
    if($response[7]){
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            $_SESSION['username'] = $response[0];
            $_SESSION['password'] = $response[1];
            $_SESSION['lastName'] = $response[2];
            $_SESSION['firstName'] = $response[3];
            $_SESSION['residence'] = $response[4];
            $_SESSION['birthDate'] = $response[5];
            $_SESSION['email'] = $response[6];
            $_SESSION['isValid'] = true;
        }
    }
}else{$_SESSION['isValid'] = false;}

if($_SESSION['isValid'] === true){
    $i = 0;
    foreach($_SESSION as $value){
        $userData[array_keys($_SESSION)[$i]] = $value;
        $i++;
    }
    echo json_encode($userData);   
}else{echo 'Invalid user';} 
?>