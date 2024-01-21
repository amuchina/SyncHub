<?php

class errorObj{
    private $errMessage;

    public function __construct($errMessage){
        $this->errMessage = $errMessage;
    }

    public function __get($property){
        return $this->$property;
    }

    public function __set($property, $value){
        $this->$property = $value;
    }

    public function __toString(){
        $str = 'Error(' . $this->errMessage . ')';
        return $str;
    }
}
?>