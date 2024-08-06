/* 
Function Declaration: Fungsi didefinisikan dengan function dan nama, mengalami hoisting.
Function Expression: Fungsi disimpan dalam variabel, tidak mengalami hoisting.
- Anonymous Function Expression: Fungsi tanpa nama.
- Named Function Expression: Fungsi dengan nama lokal.
Arrow Function: Fungsi dengan sintaks ringkas, tidak memiliki this sendiri.
 */

// function declaration
function getNama(nama) {
  const result = console.log(`Halo, ${nama}!`);
  return result;
}
getNama("Akhmad Rijal Syukri");

// anonymous function expression
const getUmur = function (a, b) {
  console.log(a * b);
};
getUmur(5, 7);

//Named Function Expression
const greet = function greetFunction(name) {
  return `Hello, ${name}!`;
};

console.log(greet("Charlie")); // Output: Hello, Charlie!

// arrow function
const getAlamat = (alamat) => {
  console.log(alamat);
};
getAlamat("Dukuh");

// rest parameter
const getAngka = (...angka) => {
  console.log(angka);
};
getAngka(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
