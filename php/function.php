<?php

// function declaration
function getNama(int $angkaSatu, int $angkaDua = 20)
{
    $hasil = $angkaSatu * $angkaDua;
    return $hasil;
}

echo getNama(20);

// anonymous function
$sayHello = function (string $nama) {
    echo "Hello, $nama";
};

$sayHello("Akhmad Rijal");

// arrow function
$angka = 2;
$perkalian = fn(int $angkaSatu) => $angkaSatu * $angka;
echo $perkalian(20);
