const person = {
  nama: "Alice",
  umur: 25,
  alamat: {
    jalan: "Jl. Jalan Raya",
    kota: "Bandung",
    provinsi: "Jawa Barat",
  },
};

delete person.alamat.provinsi;
console.log(person.alamat);
console.log(person.alamat.kota);
