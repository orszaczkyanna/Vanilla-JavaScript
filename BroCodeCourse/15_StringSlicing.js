// string slicing = creating a substring
//                  from a portion of another string
//                  string.slice(start, end)

const fullName = "János Kovács";

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(`firstname: ${firstName}`);
console.log(`lastname: ${lastName}`);