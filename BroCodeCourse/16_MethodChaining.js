// Method Chaining = Calling one method after another in one continuous line of code.

let username = window.prompt("Your name");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);