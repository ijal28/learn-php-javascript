p// Encapsulation adalah konsep membungkus data (properti) dan metode yang beroperasi pada data tersebut dalam satu unit, serta menyembunyikan detail implementasi internal dari pengguna. Di JavaScript, kita dapat mencapai encapsulation menggunakan variabel privat dan akses kontrol melalui getter dan setter.

class Hewan {
    constructor(nama) {
      this._nama = nama; // Properti ini sebaiknya dianggap privat
    }
  
    get nama() {
      return this._nama;
    }
  
    set nama(namaBaru) {
      this._nama = namaBaru;
    }
  }
  
  const hewan = new Hewan('Kucing');
  console.log(hewan._nama); // Akses langsung ke properti, meskipun sebaiknya tidak dilakukan
  hewan._nama = 'Anjing'; // Modifikasi langsung properti, meskipun sebaiknya tidak dilakukan
  console.log(hewan.nama); // Output: Anjing