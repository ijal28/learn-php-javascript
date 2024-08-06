// super constructor digunakan untuk memanggil constructor dari parents class


class Animal{
    constructor(nama){
        this.nama = nama;
    }

    getNama(){
        return this.nama;
    }

    static deskripsi(){
        return "Hewan adalah mahluk hidup yang tidak memiliki akal pikiran";
    }
}

class Dog extends Animal{
    constructor(nama, jenisHewan){
        super(nama);//super constructor
        this.jenisHewan = jenisHewan;
    }

    getNama(){
        return `${this.nama} jenis hewan ${this.jenisHewan}` ;
    }

    static deskripsi(){
        return 'Anjing adalah mamalia yang didomestikasi, bukan hewan liar alami. Mereka awalnya dibesarkan dari serigala.';
    }
}

const hewanSatu = new Dog("anjing", "karnivora");
console.log(hewanSatu.getNama());
console.log(Animal.deskripsi()); //static method memanggil dari nama classnya
console.log(Dog.deskripsi());//static method memanggil dari nama classnya
