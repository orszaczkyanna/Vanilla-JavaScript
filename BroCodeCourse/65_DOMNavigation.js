// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ------- .firstElementChild -------
//document.getElementById("fruits").firstElementChild.style.backgroundColor = "yellow";
const element1 = document.getElementById("fruits");
const firstChild = element1.firstElementChild;
firstChild.style.backgroundColor = "yellow";

const ulElements1 = document.querySelectorAll("ul"); // NodeList
ulElements1.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.color = "blue";
    //ulElement.firstElementChild.style.color = "blue";
});

// -------- .lastElementChild --------
document.getElementById("vegetables").lastElementChild.style.backgroundColor = "yellow";
// const element2 = document.getElementById("vegetables");
// const lastChild = element2.lastElementChild;
// lastChild.style.backgroundColor = "yellow";

const ulElements2 = document.querySelectorAll("ul");
ulElements2.forEach(ulElement => {
    // const lastChild = ulElement.lastElementChild;
    // lastChild.style.color = "red";
    ulElement.lastElementChild.style.color = "red";
});

// ------- .nextElementSibling -------
document.getElementById("apple").nextElementSibling.style.backgroundColor = "orange";

const element3 = document.getElementById("apple");
const nextSibling = element3.nextElementSibling;
nextSibling.style.backgroundColor = "orange";

const element4 = document.getElementById("vegetables");
const nextSibling2 = element4.nextElementSibling;
nextSibling2.style.backgroundColor = "orange";

// ----- .previousElementSibling -----
document.getElementById("ice-cream").previousElementSibling.style.backgroundColor = "white";

const element5 = document.getElementById("ice-cream");
const prevSibling = element5.previousElementSibling;
prevSibling.style.backgroundColor = "white";

// --------- .parentElement ---------
document.getElementById("cake").parentElement.style.backgroundColor = "cyan";

const element6 = document.getElementById("cake");
const parent = element6.parentElement;
parent.style.backgroundColor = "cyan";

// ------------ .children ------------
const children = document.getElementById("vegetables").children; // HTMLCollection
// const element7 = document.getElementById("vegetables");
// const children = element7.children; // HTMLCollection

Array.from(children).forEach(child => {
    child.style.backgroundColor = "green";
});

children[1].style.backgroundColor = "white";


// ---------------- HTML ---------------
// <ul id ="fruits">
//     <li id="apple">apple</li>
//     <li id="orange">orange</li>
//     <li id="banana">banana</li>
// </ul>
// <ul id="vegetables">
//     <li id="carrots">carrots</li>
//     <li id="onions">onions</li>
//     <li id="potatoes">potatoes</li>
// </ul>
// <ul id="desserts">
//     <li id="cake">cake</li>
//     <li id="pie">pie</li>
//     <li id="ice-cream">ice cream</li>
// </ul>