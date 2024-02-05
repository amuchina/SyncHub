<?php

class Person{ //entity person
    protected static $personCount = 0;
    protected $firstName;
    protected $lastName;

    protected $residence;
    protected $birthDate;

    public function __construct(
        $firstName = NULL, 
        $lastName = NULL, 
        $residence = NULL, 
        $birthDate = NULL){
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->residence = $residence;
        $this->birthDate = $birthDate;
        Person::$personCount++;
    }

    

    public function __get($property){
        return $this->$property;
    }

    public function __set($property, $value){
        $this->$property = $value;
    }

    public function __toString(){
        $str = 'Person({$this->firstName} {$this->lastName} {$this->residence} {$this->birthDate}';
        return $str;
    }

    public static function personCount(){
        return Person::$personCount;
    }
}

class User extends Person{ //entity user
    private static $userCount = 0;
    private $username;
    private $password;
    private $email;

    public function __construct(
        $firstName = NULL, 
        $lastName = NULL, 
        $residence = NULL, 
        $birthDate = NULL, 
        $username = NULL, 
        $password = NULL, 
        $email = NULL){
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->residence = $residence;
        $this->birthDate = $birthDate;
        $this->username = $username;
        $this->password = $password;
        $this->email = $email;
        User::$userCount++;
    }

    public function __get($property){
        return $this->$property;
    }

    public function __set($property, $value){
        $this->$property = $value;
    }

    public function __toString(){
        $str = 'User({$this->firstName} {$this->lastName} {$this->residence} {$this->birthDate} {$this->username} {$this->password} {$this->email})';
        return $str;
    }

    public static function userCount(){
        return User::$userCount;
    }
}
?>