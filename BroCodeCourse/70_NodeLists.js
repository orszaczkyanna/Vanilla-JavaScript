// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes
//            has forEach method

// ---------- CREATE A NODELIST ----------
let buttons = document.querySelectorAll(".myButtons");

// ---------- ADD HTML/CSS PROPERTIES ----------
buttons.forEach(button => {
    button.style.backgroundColor = "skyblue";
    button.textContent += "😁";
});

// ---------- CLICK event listener ----------
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    })
})

// ----------  MOUSEOVER + MOUSEOUT event listener ----------
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(197, 70%, 80%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(197, 70%, 85%)";
    });
});

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(197, 70%, 80%)";
//     });
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "hsl(197, 70%, 85%)";
//     });
// });

// ---------- ADD AN ELEMENT ----------
// STEP 1 CREATE
const newButton = document.createElement("button");
// STEP 2 SET ATTRIBUTES/PROPERTIES
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
// STEP 3 APPEND
document.body.appendChild(newButton);
// REASSIGN NODELIST
buttons = document.querySelectorAll(".myButtons");
// console.log(buttons);

// ---------- REMOVE AN ELEMENT ----------
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove(); // remove() method
        buttons = document.querySelectorAll(".myButtons"); // reassign
        // console.log(buttons);
    });
});

// ---------------- HTML ----------------
// <button class="myButtons">Button 1</button>
// <button class="myButtons">Button 2</button>
// <button class="myButtons">Button 3</button>
// <button class="myButtons">Button 4</button>

// ---------------- CSS ----------------
// .myButtons{
//     font-size: 4rem;
//     margin: 10px;
//     border: none;
//     border-radius: 5px;
//     padding: 10px 15px;
//     background-color: dodgerblue;
//     color: white;
//     cursor: pointer;
// }