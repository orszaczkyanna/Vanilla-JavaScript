// eventListener = Listen for specific events to create interactive web pages
//                 events: keydown, keyup
//                 document.addEventListener(event, callback);

// document.addEventListener("keydown", event => {
//     console.log(event);
// });

document.addEventListener("keydown", event => {
    console.log(`Key down = ${event.key} `);
});

document.addEventListener("keyup", event => {
    console.log(`Key up = ${event.key} `);
});

// ----------------------------- Arrow Keys -----------------------------

const myBox = document.getElementById("myBox");
const moveAmount = 20; //px
let y = 0; // <- top
let x = 0; // <- left

document.addEventListener("keydown", event => {

    if (event.key.startsWith("Arrow")) {

        event.preventDefault(); // don't scroll with the element
        // the arrow keys have a default behaviour to scroll

        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        // CSS position: relative
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});

document.addEventListener("keydown", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "😯";
});

document.addEventListener("keyup", event => {
    myBox.style.backgroundColor = "lightblue";
    myBox.textContent = "😀";
});

// --- HTML ---
// <div id="myBox">😀</div>