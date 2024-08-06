//Method adalah fungsi yang terkait dengan objek yang diciptakan dari class.

// class
class Person{
    // constructor
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }

    //Method 
    getInfoPerson(){
        return `${this.nama} ${this.umur}`;
    }

}

// instansiasi class / Object
const person1 = new Person("Budi", 20);
console.log(person1.getInfoPerson());