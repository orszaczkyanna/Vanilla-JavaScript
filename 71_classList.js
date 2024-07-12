// classList = Element property in JavaScript used to interact
//             with an element's list of classes (CSS classes)
//             Allows you to make reusable classes for many elements
//             across your webpage.

// add()
// remove()
// toggle() Remove if present, Add if not
// replace(oldClass, newClass)
// contains()

// ------------------ BUTTON ------------------
const myButton = document.getElementById("myButton");

myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});
myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});

myButton.classList.add("enabled");

myButton.addEventListener("click", event => {
    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "😡";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
});

// ------------------ H1 ------------------
const myH1 = document.getElementById("myH1");
myH1.classList.add("enabled");
myH1.addEventListener("click", event => {
    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "😯";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
});

// ------------------ NodeList ------------------
let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
});

// buttons.forEach(button => {
//     button.classList.remove("enabled");
// });

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if (event.target.classList.contains("disabled")) {
            event.target.textContent += "😀";
        }
        else {
            event.target.classList.replace("enabled", "disabled");
        }
    });
});