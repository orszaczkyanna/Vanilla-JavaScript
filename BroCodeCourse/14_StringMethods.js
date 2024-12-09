// string methods = allow you to manipulate and work with text (strings)

let userName = "Bro Code";
let phoneNumber = "123-456-7890";

userName.length;
userName.charAt(0);
userName.indexOf("o");
userName.lastIndexOf("o");

userName = userName.trim();
userName = userName.toUpperCase();
userName = userName.toLowerCase();
userName = userName.repeat(3);

let result1 = userName.startsWith(" ");
let result2 = userName.endsWith(" ");
let result3 = userName.includes(" ");

let phoneNumber1 = phoneNumber.replaceAll("-", "");
let phoneNumber2 = phoneNumber.padStart(15, "0");
let phoneNumber3 = phoneNumber.padEnd(15, "0");

console.log(phoneNumber);