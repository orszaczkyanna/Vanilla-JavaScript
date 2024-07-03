// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ---------------------- .firstElementChild ----------------------
document.getElementById("fruits").firstElementChild.style.color = "red";

const unorderedLists = document.querySelectorAll("ul"); // NodeList
unorderedLists.forEach(ul => {
    ul.firstElementChild.style.color = "red";
});

// ---------------------- .lastElementChild -----------------------
document.getElementById("vegetables").lastElementChild.style.color = "green";

// const unorderedLists = document.querySelectorAll("ul");
unorderedLists.forEach(ul => {
    ul.lastElementChild.style.color = "green";
})

// ---------------------- .nextElementSibling ---------------------
document.getElementById("apple").nextElementSibling.style.color = "orange";

// ---------------------- .previousElementSibling -----------------
document.getElementById("potatoes").previousElementSibling.style.color = "purple";

// ---------------------- .parentElement --------------------------
document.getElementById("apple").parentElement.style.backgroundColor = "pink";

// ---------------------- .children -------------------------------
const children = document.getElementById("vegetables").children; // HTMLCollection

Array.from(children).forEach(child => {
    child.style.backgroundColor = "lightgreen";
});

children[1].style.fontStyle = "italic";