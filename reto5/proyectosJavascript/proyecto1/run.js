//////////////////////////////////////////////
///       Importacion de funciones         ///
//////////////////////////////////////////////

let myLib = require('./index');

//////////////////////////////////////////////
///                 Main                   ///
//////////////////////////////////////////////

console.log(`Suma => ${myLib.sum(2, 2)}`);
console.log(`Resta => ${myLib.subs(2, 2)}`);
console.log(`División => ${myLib.div(2, 2)}`);
console.log(`Multiplicación => ${myLib.mult(2, 2)}`);