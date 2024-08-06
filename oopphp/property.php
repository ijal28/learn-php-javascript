<?php
class Person
{
    // property
    public string $nama;
    // boleh null ?
    public ?string $umur = null;
    // default  property value
    public string $kebangsaan = "indonesia";
}

$person = new Person();
// $person->nama = [];//error karena type declarasi
$person->nama = "Akhmad Rijal Syukri";
$person->umur = null;

echo "Nama : " . $person->nama . PHP_EOL;
echo "Umur: " . $person->umur;
echo "kebangsaan : " . $person->kebangsaan;
