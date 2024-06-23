// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

// ---------- STRINGS ----------

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
fruits.sort(); // ['apple', 'banana', 'coconut', 'orange', 'pineapple']
console.log(fruits);

// ---------- NUMBERS ----------

let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
// numbers.sort(); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.sort((a, b) => a - b); // növekvő [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.sort((a, b) => b - a); // csökkenő [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(numbers);

// let count = 0;
// numbers.sort((a, b) => { 
//     count++;
//     console.log(`${count}. a=${a} - b=${b} = ${a - b}`);
//     return a - b;
// });


// ---------- OBJECTS ----------

const people = [{ name: "Spongebob", age: 30, gpa: 3.0 },
{ name: "Patrick", age: 37, gpa: 1.5 },
{ name: "Squidward", age: 51, gpa: 2.5 },
{ name: "Sandy", age: 27, gpa: 4.0 }];

people.sort((a, b) => a.age - b.age); // életkor szerint növekvő
people.sort((a, b) => b.gpa - a.gpa); // gpa szerint csökkenő
people.sort((a, b) => a.name.localeCompare(b.name)); // abc rend

console.log(people);