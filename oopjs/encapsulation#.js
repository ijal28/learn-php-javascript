// Encapsulation adalah konsep membungkus data (properti) dan metode yang beroperasi pada data tersebut dalam satu unit, serta menyembunyikan detail implementasi internal dari pengguna. Di JavaScript, kita dapat mencapai encapsulation menggunakan variabel privat dan akses kontrol melalui getter dan setter.

//class
class Hewan {
    #nama; // Properti ini benar-benar privat
  
    constructor(nama) {
      this.#nama = nama;
    }
  
    get nama() {
      return this.#nama;
    }
  
    set nama(namaBaru) {
      this.#nama = namaBaru;
    }
  }
  
  const hewan = new Hewan('Kucing');
  console.log(hewan.#nama); // Error: Properti tidak dapat diakses dari luar class
  hewan.#nama = 'Anjing'; // Error: Properti tidak dapat diakses dari luar class
  console.log(hewan.nama); // Output: Kucing (nilai asli tetap tidak berubah)