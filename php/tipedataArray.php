<?php
$buah = ["Apel", "Anggur", "Jeruk", "Mangga"];
var_dump($buah);

$person = [
    "nama" => "Akhmad Rijal Syukri",
    "umur" => 21,
    "alamat" => "Dukuh",
];
var_dump($person['nama']);

$angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
$angkaGenap = array_filter($angka, function ($a) {
    return $a % 2 == 0;
});
var_dump($angkaGenap);

$angkaTambah = array_map(function ($b) {
    return $b + 1;
}, $angka);
var_dump($angkaTambah);
