const fruits = [{ name: "apple", color: "red", calories: 95 },
                { name: "orange", color: "orange", calories: 45 },
                { name: "banana", color: "yellow", calories: 105 },
                { name: "coconut", color: "white", calories: 159 },
                { name: "pineapple", color: "yellow", calories: 37 }]

console.log(fruits[0].name);
fruits.push({ name: "grapes", color: "purple", calories: 62 })
fruits.pop();

const fruits2 = fruits.slice(1, 4);
// Megtartja az 1-3 indexű elemeket.
// Marad: orange[1], banana[2], coconut[3]
fruits.splice(1, 3);
// Eltávolítja az 1-3 indexű elemeket.
// Marad: apple[0], pineapple[4]

// ---------- forEach() ----------
fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.color));
fruits.forEach(fruit => console.log(fruit.calories));

// ---------- map() ----------
const fruitNames = fruits.map(fruit => fruit.name); // ['apple', 'orange', 'banana', 'coconut', 'pineapple']
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

// ---------- filter() ----------
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

// ---------- reduce() ----------
const maxFruit = fruits.reduce((accumulator, element) =>
                                element.calories > accumulator.calories ?
                                element : accumulator);
const minFruit = fruits.reduce((accumulator, element) =>
                                element.calories < accumulator.calories ?
                                element : accumulator);

// const maxFruit = fruits.reduce((max, fruit) =>
//                                 fruit.calories > max.calories ?
//                                 fruit : max);
// const minFruit = fruits.reduce((min, fruit) =>
//                                 fruit.calories < min.calories ?
//                                 fruit : min);