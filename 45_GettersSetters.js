// getter = special method that makes a property READABLE
// setter = special method that makes a property WRITEABLE

// validate and modify a value when reading/writing a property

// _ private property

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth; // underscore prefix means private property
        }
        else {
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive number")
        }
    }

    get width() {
        // return this._width;
        return `${this._width.toFixed(1)}cm`
    }

    get height() {
        return `${this._height.toFixed(1)}cm`
    }

    get area() {
        return `${(this._width * this._height).toFixed(1)}cm^2`;
    }

}

// const rectangle = new Rectangle(-100000, "pizza");

const rectangle = new Rectangle(3, 4);

rectangle.width = 6;
rectangle.height = 8;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

// ----------------------------------------------------------------------

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else {
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        }
        else {
            console.error("Age must be a non-negative number");
        }
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get fullName() {
        return this._firstName + " " + this.lastName;
    }

    get age() {
        return this._age;
    }
}

// const person = new Person(42, 65, "pizza");
const person = new Person("Spongebob", "Squarepants", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

// ----------------------------------------------------------------------


class BankAccount {
    constructor(balance, accountNumber) {
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    // Setters

    set balance(newBalance) {
        if (newBalance >= 0) {
            this._balance = newBalance;
        }
        else {
            console.error("Balance must be a pozitive number");
        }
    }

    set accountNumber(newAccountNumber) {
        if (typeof newAccountNumber === 'string' && newAccountNumber.length >= 12) {
            this._accountNumber = newAccountNumber;
        }
        else {
            console.error("Account number must be a string and the length must be equal or greater than 12");
        }
    }

    // Getters

    get balance() {
        return `$${this._balance.toFixed(2)}`;
    }

    get accountNumber() {
        return this._accountNumber;
    }

    // Methods

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
        }
        else {
            console.error("Deposit amount must be positive");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
        }
        else {
            console.error("Withdrawal amount must be positive and less than or equal to the balance");
        }
    }

}

// const bankAccount = new BankAccount("onethousand", 123456789012);
const bankAccount = new BankAccount(10000, "123456789012");

bankAccount.deposit(50);
bankAccount.withdraw(500);
console.log(bankAccount.balance);
console.log(bankAccount.accountNumber);