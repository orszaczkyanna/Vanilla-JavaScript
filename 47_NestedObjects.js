// nested objects = Objects inside of other Objects.
//                  Allows you to represent more complex data structures
//                  Child Object is enclosed by a Parent Object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}


const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}

console.log(person.hobbies[0]);
console.log(person.address.street);

// for (const key in object) {
//     console.log(object[key]);
// }

for (const property in person.address) {
    console.log(person.address[property]);
}


// ---------------------------------------------------------------

class Person {
    constructor(name, age, ...address) { // rest parameters
        this.name = name;
        this.age = age;
        this.address = new Address(...address) // spread operator
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Water")
const person2 = new Person("Patrick", 37, "128 Conch St.", "Bikini Bottom", "Int. Water")
const person3 = new Person("Squidward", 37, "126 Conch St.", "Bikini Bottom", "Int. Water")


console.log(person3.name);
console.log(person3.age);
console.log(person3.address);

for (const key in person3.address) {
    console.log(person3.address[key]);
}