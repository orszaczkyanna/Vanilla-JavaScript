// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById()         // ELEMENT OR NULL
// 2. document.getElementsClassName()   // HTML COLLECTION
// 3. document.getElementsByTagName()   // HTML COLLECTION
// 4. document.querySelector()          // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()       // NODELIST

// ---------- getElementById() ----------
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "darkblue";
myHeading.style.textAlign = "center";
console.log(myHeading);

// ---------- getElementsByClassName() ----------
// HTML Collections
//          • are iterable
//          • allow for live updates
//          • don't have a built in forEach() method
//          • but can be type casted as an array

const fruits = document.getElementsByClassName("fruits"); // HTML Collection, not an array
console.log(fruits);

for (let fruit of fruits) {
    fruit.style.backgroundColor = "yellow";
}

// Array.from(fruits).forEach(fruit => fruit.style.backgroundColor = "red");
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "red";
});

fruits[0].style.backgroundColor = "hsl(0, 100%, 80%)";

// ---------- getElementsByTagName() ----------
const h2Elements = document.getElementsByTagName("h2");
const liElements = document.getElementsByTagName("li");

console.log(h2Elements);
console.log(liElements);

for (let h2Element of h2Elements) {
    h2Element.style.backgroundColor = "yellowgreen";
}

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "yellow";
});

// ---------- querySelector() ----------
const firstHeading = document.querySelector("#my-heading");
const firstFruit = document.querySelector(".fruits");
const firstLi = document.querySelector("li");

firstHeading.style.color = "white";
firstFruit.style.color = "white";
firstLi.style.color = "orange";

// ---------- querySelectorAll() ----------
// NODELISTs
//          • are static (HTML COLLECTIONs are live)
//          • don't update automatically in the DOM
//          • have a built in forEach() method

const fruitsNodelist = document.querySelectorAll(".fruits");
const liNodelist = document.querySelectorAll("li");

console.log(fruitsNodelist);
console.log(liNodelist);

liNodelist.forEach(li => {
    li.style.color = "brown";
})

for (let li of liNodelist) {
    li.style.color = "brown";
}

fruitsNodelist[2].style.backgroundColor = "lightgrey";
liNodelist[0].style.color = "orange";

// -------------- HTML --------------

// <h1 id="my-heading">Food R Us</h1>

// <div class="fruits">Apple</div>
// <div class="fruits">Orange</div>
// <div class="fruits">Banana</div>

// <h2>Root Vegetables</h2>
// <ul>
//     <li>Beets</li>
//     <li>Carrots</li>
//     <li>Potatoes</li>
// </ul>

// <h2>Non-Root Vegetables</h2>
// <ul>
//     <li>Broccoli</li>
//     <li>Celery</li>
//     <li>Onions</li>
// </ul>
// <script src="main.js"></script>