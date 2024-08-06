<?php
class Manager
{
    public $nama;
    public function sayHello($nama)
    {
        echo "Hello saya $nama, my name is $this->nama";
    }
}

class Presiden extends Manager
{

}

$manager = new Manager();
$manager->nama = "Budi";
$manager->sayHello("Joko") . PHP_EOL;

$presiden = new Presiden();
$presiden->nama = "Haji";
$presiden->sayHello("Joko");
