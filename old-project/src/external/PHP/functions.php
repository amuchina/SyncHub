<?php
const USERS_TABLE = 'utenti';
const USERS_COLUMNS = array('username', 'password', 'cognome', 'nome', 'citta', 'dataNascita', 'email');

use Dotenv\Dotenv as Dotenv;
use Doctrine\DBAL\DriverManager;

require_once 'entities.php';
require_once 'errorObj.php';
require_once 'vendor/autoload.php';

function includeEnv(){

    $envpath =  "envconfig";

    $dotenv = Dotenv::createImmutable($envpath);
    $dotenv->load();       
};

function implodeResult(
    array $result, 
    string $column
    ): string { //convert associative array to string separated by ','
    $temp = array();
    foreach ($result as $item) {
        $temp[] = $item[$column];
    }
    $str = implode(', ', $temp);
    return $str;
};

function fetchAllFromResult( 
    $result, 
    $column //=primarykey column as default?
    ): array { //return array of column values of the column parameter
    $out = explode(', ', implodeResult($result->fetchAllAssociative(), $column));
    return $out;
};

function fetchFromResult( 
    $result, 
    $column,
    $rowindex=0 //first instance value as default if not specified
    ) { //return column value of the rowindex parameter
    $out = explode(', ', implodeResult($result->fetchAllAssociative(), $column));
    return $out[$rowindex];
};

function singleSelectQuery(
    $column, 
    $condition=null,
    $reference_table=USERS_TABLE //users table as default if not specified
    ) { //function to execute a single select query from db
    $query = selectQueryBuilder($column, $condition, $reference_table);
    $result = $GLOBALS['c']->executeQuery($query);
    return $result;
    //return an associative array in format $result[rowIndex][columnName] 
};

function selectQueryBuilder(
    $column, 
    $condition=null, 
    $reference_table=USERS_TABLE) {
    $builder = $GLOBALS['c']->createQueryBuilder();
    if($condition == null) {
        $tmp = $builder->select($column)
        ->from($reference_table);// "SELECT " . $column . " FROM " . $reference_table . " ";
        $result = $GLOBALS['c']->fetchAllAssociative($tmp);
        return $result;
    }else {
        $tmp = $builder->select($column)
        ->from($reference_table)
        ->where($condition);//"SELECT " . $column . " FROM " . $reference_table . " WHERE " . $condition . " ";
        $result = $GLOBALS['c']->fetchAllAssociative($tmp);
        return $result;
    }
}

function insertQueryBuilder(
    $values,
    $reference_table=USERS_TABLE //users table as default if not specified
    ) { //function to execute a single select query from db
    $builder = $GLOBALS['c']->createQueryBuilder();
    $result = $builder->insert($reference_table)->values(
        [
            'username' => "'" . $values[0] . "'",
            'password' => "'" . $values[1] . "'",
            'nome' => "'" . $values[2] . "'",
            'cognome' => "'" . $values[3] . "'",
            'citta' => "'" . $values[4] . "'",
            'dataNascita' => "'" . $values[5] . "'",
            'email' => "'" . $values[6] . "'",
        ]
    );
    return $result;
};

function singleInsertQuery(
    $values, 
    $reference_table=USERS_TABLE) {
    $query = insertQueryBuilder($values, $reference_table);
    $GLOBALS['c']->executeQuery($query);
};

function resultToArray(
    $result
    ) {
    $users = array();
    for($i = 0; $i < count($result); $i++) { //only works with SELECT * FROM table query or SELECT * FROM table WHERE condition
        array_push($users, initUser());
        for($j = 0; $j < count(USERS_COLUMNS); $j++){ 
            $users[$i]->__set(USERS_COLUMNS[$j], $result[$i][USERS_COLUMNS[$j]]);
        }
    }
    return $users;
};

function usersToTable($resArray, $epilepsyMode=false) {
    echo '<table class="table table-striped table-hover table-bordered">';
    echo '<tr>';
        for($i = 0; $i < count(USERS_COLUMNS); $i++) {
            echo '<th><strong>' . USERS_COLUMNS[$i] . '</strong></th>';
        }
    echo '</tr>';
    for($i = 0; $i < count($resArray); $i++){
        echo ($epilepsyMode) ? '<tr style="background-color: ' . COLORS[rand(0, 49)] . '">' : '<tr>';
        for($j = 0; $j < count(USERS_COLUMNS); $j++){
            echo '<th>' . $resArray[$i]->__get(USERS_COLUMNS[$j])  . '</th>';
        }
        echo '</tr>';
    }
    echo '</table>';
};

function initUser(
    $username = NULL, 
    $password = NULL, 
    $firstName = NULL, 
    $lastName = NULL, 
    $residence = NULL, 
    $birthDate = NULL, 
    $email = NULL): User{
    $p = new Person($firstName, $lastName, $residence, $birthDate);
    $userObj = new User(
        $p->__get('firstName'), $p->__get('lastName'), $p->__get('residence'), $p->__get('birthDate'), 
        $username, 
        $password, 
        $email);
    return $userObj;
};

function addUserFromPost(){
    $firstNameForm = $_POST['firstName'];
    $lastNameForm = $_POST['lastName'];
    $residenceForm = $_POST['residence'];
    $birthDateForm = $_POST['birthDate'];
    $emailForm = $_POST['email'];
    $usernameForm = $_POST['username'];
    $passwordForm = $_POST['password'];

    $v = [ $usernameForm, 
    $passwordForm, 
    $firstNameForm, 
    $lastNameForm, 
    $residenceForm, 
    $birthDateForm, 
    $emailForm ];

    singleInsertQuery($v, 'utenti');
};

function fetchUserFromPost( //fixed and rebuilded the old function to prevent SQL injection
    $username,
    $password){
    $response = array();
    $builder = $GLOBALS['c']->createQueryBuilder();
    $result = $builder
        ->select('*')
        ->from('utenti')
        ->where('username = ?')
        ->andWhere('password = ?')
        ->setParameter(0, $username)
        ->setParameter(1, $password)
        ->fetchAllAssociative();
    if(!($result && count($result) > 0)) {
        $err = new errorObj('Nessun utente trovato');
        array_push($response, json_encode($err->__toString()));
        array_push($response, false);
        return $response;
    }else{
        array_push($response, json_encode($result[0]["username"]));
        array_push($response, json_encode($result[0]["password"]));
        array_push($response, json_encode($result[0]["cognome"]));
        array_push($response, json_encode($result[0]["nome"]));
        array_push($response, json_encode($result[0]["citta"]));
        array_push($response, json_encode($result[0]["dataNascita"]));
        array_push($response, json_encode($result[0]["email"]));
        array_push($response, true);
        return $response;
    }
}

function validateSession($response){
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
                $_SESSION['isValid'] = $response[7];
                return true;
            }
        }
    }else{
        $_SESSION['isValid'] = false;
        return false;
    }
}

function newConnection(){
    $connectionParams = [
        'dbname' => $_ENV['DB_DATABASE'],
        'user' => $_ENV['DB_USER'],
        'password' => $_ENV['DB_PASS'],
        'host' => $_ENV['DB_HOST'],
        'driver' => $_ENV['DB_DRIVER'] ?? 'pdo_mysql',
    ];
    $conn = DriverManager::getConnection($connectionParams);
    return $conn;
};

/* $myquery = singleSelectQuery('*');

$users = resultToArray($myquery);

usersToTable($users, true);
 */
/* $primarykey = $conn->prepare("SHOW KEYS FROM utenti WHERE Key_name='PRIMARY'")->executeQuery(); 
var_dump($primarykey); *///return primary key column name, todo fix
?>