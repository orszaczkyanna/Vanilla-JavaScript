// ES6 Module = An external file that contains reusable code
//              that can be imported into other JavaScript files
//              Can contain variables, classes, functions ... and more
//              Introduced as part of ECMAScript 2015 update

// ----------------- HTML -----------------
// type="module"
// <script type="module" src='main.js'></script>


// ----------------- module: mathUtil.js -----------------
export const PI = 3.14159;

export function getCircumference(radius) {
    return 2 * PI * radius;
}

export function getArea(radius) {
    return PI * radius * radius;
}

export function getVolume(radius) {
    return 4 * PI * radius * radius;
}


// ----------------- main.js -----------------
// import { PI, getCircumference, getArea, getVolume } from './mathUtil.js'

// console.log(PI);

// console.log(`circumference: ${getCircumference(10).toFixed(2)}cm`);
// console.log(`area: ${getArea(10).toFixed(2)}cm^2`);
// console.log(`volume: ${getVolume(10).toFixed(2)}cm^3`);