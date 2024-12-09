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


// ----------------------------------------------------------------

class Company {
    constructor(name, ...employees) {
        this.name = name;

        // Átalakítja az alkalmazottak tömbben megadott adatait Employee objektumokká
        this.employees = employees.map(emp => new Employee(...emp));
        // emp = employees[0] = ["Spongebob", 30, "Fry Cook", 3000]
        // new Employee("Spongebob", 30, "Fry Cook", 3000)
    }

    // Hozzáad egy új Employee objektumot az employees tömbhöz
    addEmployee(...employee) {
        this.employees.push(new Employee(...employee));
    }
}

class Employee {
    constructor(name, age, ...job) {
        this.name = name;
        this.age = age;
        this.job = new Job(...job);
    }
}

class Job {
    constructor(title, salary) {
        this.title = title;
        this.salary = salary;
    }
}

const company = new Company("Krusty Krab",
    ["Spongebob", 30, "Fry Cook", 3000],
    ["Patrick", 37, "Cashier", 2500],
    ["Squidward", 37, "Manager", 3500]
);

company.addEmployee("Mr.Krabs", 55, "Owner", 5000);

console.log(company.name);
for (const employee of company.employees) {
    console.log(`Employee: ${employee.name}, Age: ${employee.age}`);
    console.log(`Job: ${employee.job.title}, Salary: ${employee.job.salary}`);
}