<?php
class Person
{
    public $nama;
    public $umur;

    public function sayHello($nama, $umur)
    {
        echo "Hello nama saya $nama dan umur saya $umur";
    }
}

$person = new Person();
// function
$person->sayHello("Akhmad Rijal Syukri", 21);
