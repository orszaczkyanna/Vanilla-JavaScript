// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once

//                   (parameters) =>  some code 
//                   (parameters) => { more than one statement }

const hello = () => console.log("Hello");

const helloName = (name) => console.log(`Hello ${name}`);

const helloNameAge = (name, age) => {
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old`);
}

// setTimeout(callback, milliseconds);
setTimeout(() => console.log("Hello"), 3000);

hello();
helloName("Someone");
helloNameAge("Someone", 20);

// ---------------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
// const squares2 = numbers.map((element) => { return Math.pow(element, 2) } );
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
// const evenNums2 = numbers.filter((element) => { return element % 2 === 0 } );
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
// console.log(squares2);
console.log(cubes);
console.log(evenNums);
// console.log(evenNums2);
console.log(oddNums);
console.log(total);