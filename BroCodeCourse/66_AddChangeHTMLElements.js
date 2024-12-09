// ------------------ <h1> ------------------

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!"
newH1.id = "myH1"
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
document.body.append(newH1); // last child
document.body.prepend(newH1); // first child

document.getElementById("box2").append(newH1);
document.getElementById("box2").prepend(newH1);

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2); // insert newH1 before box2

const boxes = document.querySelectorAll(".box"); // NodeList
document.body.insertBefore(newH1, boxes[1]);

// REMOVE HTML ELEMENT
document.body.removeChild(newH1);
document.getElementById("box2").removeChild(newH1);

// ------------------ HTML ------------------
// <div id="box1" class="box">
//     <p>Box1</p>
// </div>
// <div id="box2" class="box">
//     <p>Box2</p>
// </div>
// <div id="box3" class="box">
//     <p>Box3</p>
// </div>
// <div id="box4" class="box">
//     <p>Box4</p>
// </div>


// ------------------ <ol> ------------------

// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.backgroundColor = "lightgreen";
newListItem.style.fontWeight = "bold";

// STEP 3 APPEND ELEMENT TO DOM
document.body.append(newListItem);
document.body.prepend(newListItem);

document.getElementById("fruits").append(newListItem);
document.getElementById("fruits").prepend(newListItem);

const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange)

const listItems = document.querySelectorAll("#fruits li"); // NodeList
document.getElementById("fruits").insertBefore(newListItem, listItems[1]);

// REMOVE HTML ELEMENT
document.body.removeChild(newListItem);
document.getElementById("fruits").removeChild(newListItem);

// ------------------ HTML ------------------
// <ol id="fruits">
//     <li id="apple">apple</li>
//     <li id="orange">orange</li>
//     <li id="banana">banana</li>
// </ol>