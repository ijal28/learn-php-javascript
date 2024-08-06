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

    public function showNIM()
    {
        // Mengakses konstanta NIM dengan self di dalam class
        echo "NIM: " . self::NIM . PHP_EOL;
    }
}

$person = new Person();
// mengakses konstant diluar class
echo Person::NIM . PHP_EOL;
// memanggil method nim
$person->showNIM();
// memanggil method sayHello
$person->sayHello("Akhmad Rijal Syukri", 21);
