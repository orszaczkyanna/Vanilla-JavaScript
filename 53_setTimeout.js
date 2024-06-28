// setTimeout() = function in JavaScript that allows you to schedule
//                the execution of a function after an amount of time (milliseconds)
//                !! Times are approximate (varies based on the workload of the JavaScript runtime env)

//                setTimeout(callback, delay);

// setTimeout(() => {
//     window.alert("Hello");
// }, 3000);

let timeoutId;

// <button onclick="startTimer()">START</button>
function startTimer() {
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

// <button onclick="clearTimer()">CLEAR</button>
function clearTimer() {
    clearTimeout(timeoutId);
    console.log("CLEARED");
}