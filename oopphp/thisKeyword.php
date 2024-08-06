<?php
class Person
{
    public $nama;
    public $umur;

    public function sayHello(?string $nama)
    {
        if (is_null($nama)) {
            // this mengakses obeject
            echo "Hai  nama saya $this->nama";
        } else {
            echo "Hai $nama  nama saya $this->nama";
        }
    }
}

$person = new Person();
$person->nama = "ijal";
// function
$person->sayHello("Akhmad Rijal Syukri");
