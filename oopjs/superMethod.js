// super method digunakan untuk memanggil method dari parent class di dalam class child


class Animal{
    constructor(nama){
        this.nama = nama;
    }

    getNama(){
        return this.nama;
    }
}

class Dog extends Animal{
    constructor(nama, jenisHewan){
        super(nama);//super constructor
        this.jenisHewan = jenisHewan;
    }

    getNama(){
        const getNama = super.getNama();//suoer Method
        return `${getNama} jenis hewan ${this.jenisHewan}` ;
    }
}

const hewanSatu = new Dog("anjing", "karnivora");
console.log(hewanSatu.getNama());