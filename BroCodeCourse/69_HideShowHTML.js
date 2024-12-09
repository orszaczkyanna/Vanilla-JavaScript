const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

// myButton.addEventListener("click", event => {
//     if (myImg.style.display === "none"){
//         myImg.style.display = "block";
//         event.target.textContent = "Hide";
//     }
//     else{
//         myImg.style.display = "none";
//         event.target.textContent = "Show";
//     }
// });

myButton.addEventListener("click", event => {
    if (myImg.style.visibility === "hidden") {
        myImg.style.visibility = "visible";
        event.target.textContent = "Hide";
    }
    else {
        myImg.style.visibility = "hidden";
        event.target.textContent = "Show";
    }
});

// --------------- HTML ---------------
// <img id="myImg" src="bg.jpg" width="400px"><br>
// <button id="myButton">Hide</button>