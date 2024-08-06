<?php
class Person
{
    const NIM = 2003033;
    public $nama;
    public $umur;

    // constructor
    public function __construct($nama, $umur)
    {
        $this->nama = $nama;
        $this->umur = $umur;
    }

    public function sayHello()
    {
        echo "Hello nama saya $this->nama dan umur saya $this->umur";
    }

    public function showNIM()
    {
        // Mengakses konstanta NIM dengan self di dalam class
        echo "NIM: " . self::NIM . PHP_EOL;
    }
}

// instansiasi
$person = new Person("Jhon", 22);
var_dump($person);
// memanggil method sayHello
$person->sayHello();
