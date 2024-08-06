// inheritance adalah konsep di mana satu class dapat mewarisi properti dan metode dari class lain.

class Animal{
    constructor(nama){
        this.nama = nama;
    }

    getNama(){
        return this.nama;
    }
}

// inheritance
class Dog extends Animal{
    constructor(nama, jenisHewan){
        super(nama);
        this.jenisHewan = jenisHewan;
    }

    getNama(){
        return `${this.nama} jenis hewan ${this.jenisHewan}` ;
    }
}

const hewanSatu = new Dog("anjing", "karnivora");
console.log(hewanSatu.getNama());