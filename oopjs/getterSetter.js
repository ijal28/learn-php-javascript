// Getter dan setter adalah memungkinkan kita untuk mengontrol bagaimana properti dari suatu objek diakses dan dimodifikasi.

// class
class Hewan {
  // constructor
    constructor(nama) {
      this._nama = nama; // Menggunakan underscore untuk properti privat
    }
  
    // Getter untuk properti nama
    get nama() {
      return this._nama;
    }
  
    // Setter untuk properti nama
    set nama(namaBaru) {
      this._nama = namaBaru;
    }
  
    // Method untuk mendapatkan nama
    getNama() {
      return this._nama;
    }
  
    // Static method untuk deskripsi hewan
    static deskripsi() {
      return "Hewan adalah mahluk hidup yang tidak memiliki akal pikiran";
    }
  }
  
  class Anjing extends Hewan {
    constructor(nama, jenisHewan) {
      super(nama); // Memanggil constructor parent class
      this._jenisHewan = jenisHewan; // Menggunakan underscore untuk properti privat
    }
  
    // Getter untuk properti jenisHewan
    get jenisHewan() {
      return this._jenisHewan;
    }
  
    // Setter untuk properti jenisHewan
    set jenisHewan(jenisHewanBaru) {
      this._jenisHewan = jenisHewanBaru;
    }

    getNama(){
      const getNama = super.getNama();//super Method
      return `${getNama} jenis hewan ${this.jenisHewan}` ;
  }
  
    // Static method untuk deskripsi spesies anjing
    static deskripsi() {
      return 'Anjing adalah mamalia yang didomestikasi, bukan hewan liar alami. Mereka awalnya dibesarkan dari serigala.';
    }
  }
  
  const hewanSatu = new Anjing("anjing", "karnivora");
  console.log(hewanSatu.getNama()); // Output: anjing jenis hewan karnivora
  
  // Menggunakan setter untuk mengubah nama
  hewanSatu.nama = "doggy";
  console.log(hewanSatu.getNama()); // Output: doggy jenis hewan karnivora
  
  // Menggunakan setter untuk mengubah jenis hewan
  hewanSatu.jenisHewan = "omnivora";
  console.log(hewanSatu.getNama()); // Output: doggy jenis hewan omnivora
  
  // Memanggil static method dari class Hewan
  console.log(Hewan.deskripsi()); // Output: Hewan adalah mahluk hidup yang tidak memiliki akal pikiran
  
  // Memanggil static method dari class Anjing
  console.log(Anjing.deskripsi()); // Output: Anjing adalah mamalia yang didomestikasi, bukan hewan liar alami. Mereka awalnya dibesarkan dari serigala.