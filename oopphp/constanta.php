<?php
class Person
{
    const NIM = 2003033;
    public $nama;
    public $umur;

    public function sayHello($nama, $umur)
    {
        echo "Hello nama saya $nama dan umur saya $umur";
    }
}

$person = new Person();
// mengakses konstant
echo Person::NIM . PHP_EOL;

// function
$person->sayHello("Akhmad Rijal Syukri", 21);
