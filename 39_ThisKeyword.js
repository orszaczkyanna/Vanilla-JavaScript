// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person1.name = this.name

//        ! this keyword doesn't work with arrow functions

console.log(this);  // window object

const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function () { console.log(`Hi! I am ${this.name}`) },
    eat: function () { console.log(`${this.name} is eating ${this.favFood}`) },
}

const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function () { console.log(`Hi! I am ${this.name}`) },
    eat: function () { console.log(`${this.name} is eating ${this.favFood}`) },
}

person1.eat();
person2.eat();