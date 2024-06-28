// console.time() = tool that allows you to measure the time it takes
//                  for a section of code or process to execute
//                  Great for identifying performance "bottlenecks"

// console.time("uniqueLabel")
// console.timeEnd("uniqueLabel")

console.time("test");
for (let i = 0; i < 10; i++) {
    // do some code here
}
console.timeEnd("test");

// -----------------------------------------------

function loadData() {

    console.time("loadData");

    for (let i = 0; i < 10000; i++) {
        // pretend to load some data        
    }

    console.timeEnd("loadData");
}

function processData() {
    console.time("processData");

    for (let i = 0; i < 100; i++) {
        // pretend to process some data  
    }

    console.timeEnd("processData");
}

loadData();
processData();