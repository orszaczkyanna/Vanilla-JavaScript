// eventListener = Listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback);
//                 .addEventListener("click", (event) => {});

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// ------------ callback ------------ click ------------
function changeColor(event) {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🤕";
}
myBox.addEventListener("click", changeColor);

// ------------ anonymous function ------------ mouseover ------------
myBox.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it! 😯"
});

// ------------ arrow function ------------ mouseout ------------
// myBox.addEventListener("mouseout", (event) => {
myBox.addEventListener("mouseout", event => {       // No parentheses needed for one parameter
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😀";
});

// ------------ button ------------
myButton.addEventListener("click", (event) => {
    myBox.style.backgroundColor = "crimson";
    myBox.textContent = "OUCH! 😭";
})

myButton.addEventListener("mouseout", (event) => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😀";
});

// ------------ HTML ------------
// <div id="myBox">
//     Click Me 😀
// </div>
// <button id="myButton">Click Me</button>