// .reduce() = reduce the elements of an array to a SINGLE VALUE

const prices = [1, 2, 3, 4, 5, 6, 7];
const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element) {
    // console.log(`accumulator: ${accumulator}, element: ${element}`);
    return accumulator + element;
}

// ------------------------------------------------

const grades = [75, 50, 90, 80, 65, 95];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element) {
    // console.log(`accumulator: ${accumulator}, element: ${element}`);
    return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
    // console.log(`accumulator: ${accumulator}, element: ${element}`);
    return Math.min(accumulator, element)
}