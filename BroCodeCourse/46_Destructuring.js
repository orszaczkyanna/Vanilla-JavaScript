// destructuring =  extract values from arrays and objects,
//                  then assign them to variables in a convenient way
//                  [] = to perform array destructuring
//                  {} = to perform object destructuring


// ---------- EXAMPLE 1 ----------
// SWAP THE VALUE OF TWO VARIABLES []

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1

// ---------- EXAMPLE 2 ----------
// SWAP 2 ELEMENTS IN AN ARRAY []

const colors1 = ["red", "green", "blue", "black", "white"];

[colors1[0], colors1[4]] = [colors1[4], colors1[0]];

console.log(colors1); // ['white', 'green', 'blue', 'black', 'red']

// ---------- EXAMPLE 3 ----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES []

const colors2 = ["red", "green", "blue", "black", "white"];

const [firstColors, secondColor, thirdColor, ...extraColors] = colors2;

console.log(firstColors); // red
console.log(secondColor); // green
console.log(thirdColor); // blue
console.log(extraColors); // ['black', 'white']

// ---------- EXAMPLE 4 ----------
// EXTRACT VALUES FROM OBJECTS {}

const person1a = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person2a = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

const { firstName, lastName, age, job = "Unemployed" } = person1a;

console.log(firstName); // Spongebob 
console.log(lastName); // Squarepants
console.log(age); // 30
console.log(job); // Fry Cook

// ---------- EXAMPLE 5 ----------
// DESTRUCTURING IN FUNCTION PARAMETERS {}

const person1b = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person2b = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

function displayPeson({ firstName, lastName, age, job = "Unemployed" }) {
    console.log(`Name: ${firstName} ${lastName}`); // Name: Patrick Star
    console.log(`Age: ${age}`); // Age: 34
    console.log(`Job: ${job}`); // Job: Unemployed
}

displayPeson(person2b);