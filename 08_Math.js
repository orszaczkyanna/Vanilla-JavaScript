// Math = built-in object that provides a
//        collection of properties and methods

Math.PI
Math.E

let x = 3;
let y = 2;
let z = 1;

z = Math.round(x);
z = Math.floor(x); // LE kerekít
z = Math.ceil(x); // FEL kerekít
z = Math.trunc(x);  // csonkolás (levágja a tizedesjegyeket)

z = Math.pow(x, y);
z = Math.sqrt(x);

z = Math.log(x);

z = Math.sin(x); // in radian
z = Math.cos(x);
z = Math.tan(x);

z = Math.abs(x); // abszolútérték
z = Math.sign(x); // a szám előjele (-1, 0, 1)

let max = Math.max(x, y, z);
let min = Math.min(x, y, z);