sum(displayConsole, 1, 2);

function sum(callback, x, y) {
    let result = x + y;
    callback(result); // invoke
}

function displayConsole(result) {
    console.log(result);
}

// displayDOM
function displayPage(result) {
    document.getElementById("myH1").innerHTML = result;
}

// ----------------------------------------------------------------

hello(goodbye);

function hello(callback) {
    console.log("Hello!");
    callback(); // invoke
}

function goodbye() {
    console.log("Goodbye!");
}

// function hello(){
//    console.log("Hello!");
// }
// function goodbye(){
//     console.log("Goodbye!");
// }
// hello();
// goodbye();