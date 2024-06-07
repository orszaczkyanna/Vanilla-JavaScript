// function DECLARATION = define a reusable block of code
//                        that performs a specific task
function helloDec() {
    console.log("HelloDec!");
}
helloDec();

// function EXPRESSIONS = a way to define functions
//                        as VARIABLES or VALUES

const helloExp = function () {
    console.log("HelloExp1!");
}
helloExp();

setTimeout(function () {
    console.log("HelloExp2!");
}, 3000);

// ------------------------------------------

numbers = [1, 2, 3, 4, 5, 6, 7, 8,];

const squares = numbers.map(function (element) {
    return Math.pow(element, 2);
});

const cubes = numbers.map(function (element) {
    return Math.pow(element, 3);
});

const evenNums = numbers.filter(function (element) {
    return element % 2 === 0;
});

const oddNums = numbers.filter(function (element) {
    return element % 2 !== 0;
});

const total = numbers.reduce(function (accumulator, element) {
    return accumulator + element;
});

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);