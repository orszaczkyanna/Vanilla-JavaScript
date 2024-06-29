// <h1>Stopwatch</h1>
// <div id="container">
//     <div id="display">00:00:00:00</div>
//     <div id="controls">
//         <button id="startBtn" onclick="start()">Start</button>
//         <button id="stopBtn" onclick="stop()">Stop</button>
//         <button id="resetBtn" onclick="reset()">Reset</button>
//     </div>
// </div>
// <script src='main.js'></script>

const display = document.getElementById("display");
let timer = null; // going to hold the ID of setInterval | null = no value
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;   // Date.now(): in milliseconds since epic
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer); // stop the stopwatch from running
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10); // /10 -> only first 2 digits

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}