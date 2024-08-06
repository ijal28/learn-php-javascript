<?php
class Produk
{
    private $nama;
    private $harga;

    public function __construct($nama, $harga)
    {
        $this->nama = $nama;
        $this->harga = $harga;
    }
    public function getNama()
    {
        return $this->nama;
    }

    public function getHarga()
    {
        return $this->harga;
    }
}

$produk = new Produk("Buku", 30000);
echo $produk->getNama();

$produk->nama = "Pulpen";
$produk->harga = 3000;
