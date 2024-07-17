// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object

// ---------- JSON.stringify() ----------
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
};
const people = [{"name": "Spongebob", "age": 30,"isEmployed": true},
                {"name": "Patrick", "age": 34, "isEmployed": false},
                {"name": "Squidward", "age": 50,  "isEmployed": true},
                {"name": "Sandy", "age": 27, "isEmployed": false}]

const jsonStringNames = JSON.stringify(names);
const jsonStringPerson = JSON.stringify(person);
const jsonStringPeople = JSON.stringify(people);

console.log(jsonStringPerson);

// ---------- JSON.parse() ----------
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{ "name": "Spongebob", "age": 30, "isEmployed": true },
                     { "name": "Patrick", "age": 34, "isEmployed": false },
                     { "name": "Squidward", "age": 50, "isEmployed": true },
                     { "name": "Sandy", "age": 27, "isEmployed": false }]`;

const parsedDataNames = JSON.parse(jsonNames);
const parsedDataPerson = JSON.parse(jsonPerson);
const parsedDataPeople = JSON.parse(jsonPeople);

console.log(parsedDataPerson);

// ---------- fetch() ----------
fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value));

fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(err => console.error(err));

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(err => console.error(err));