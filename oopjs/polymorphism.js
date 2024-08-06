// Polymorphism memungkinkan metode yang sama untuk berperilaku berbeda pada class yang berbeda.


// class
class Hewan {
  // Properti privat
  #nama;

  // constructor
  constructor(nama) {
    this.#nama = nama; // Menggunakan # untuk properti privat
  }

  // Getter untuk properti nama
  get nama() {
    return this.#nama;
  }

  // Setter untuk properti nama
  set nama(namaBaru) {
    this.#nama = namaBaru;
  }

  // Method untuk mendapatkan nama
  getNama() {
    return this.#nama;
  }

  // Method untuk suara hewan (akan di-override oleh subclass) 
  suara() {
    return "Hewan membuat suara";
  }

  // Static method untuk deskripsi hewan
  static deskripsi() {
    return "Hewan adalah mahluk hidup yang tidak memiliki akal pikiran";
  }
}

class Anjing extends Hewan {
  // Properti privat
  #jenisHewan;

  // constructor
  constructor(nama, jenisHewan) {
    super(nama); // Memanggil constructor parent class
    this.#jenisHewan = jenisHewan; // Menggunakan # untuk properti privat
  }

  // Getter untuk properti jenisHewan
  get jenisHewan() {
    return this.#jenisHewan;
  }

  // Setter untuk properti jenisHewan
  set jenisHewan(jenisHewanBaru) {
    this.#jenisHewan = jenisHewanBaru;
  }

  // Method untuk mendapatkan nama dan jenis hewan
  getNama() {
    const getNama = super.getNama(); // Memanggil method dari parent class
    return `${getNama} jenis hewan ${this.jenisHewan}`;
  }

  // Method untuk suara hewan (overriding method suara dari superclass)
  suara() {
    return "Anjing menggonggong";
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

// Memanggil method suara untuk anjing
console.log(hewanSatu.suara()); // Output: Anjing menggonggong

const hewanDua = new Hewan();
// Memanggil method dari class Hewan
console.log(hewanDua.suara()); // Output: Hewan membuat suara