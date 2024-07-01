// Error = An Object that is created to represent a problem that occurs
//         Occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//                ex. close files, close connections, release resources

try {
    console.log(x);
    // Network Errors
    // Promise Rejections
    // Security Errors
}
catch (error) {
    console.error(error);
}
finally {
    console.log("This always executes");
    // Close Files
    // Close Connections
    // Release Resources
}

console.log("You have reached the end");

// ----------------------------------------

try {
    const divident = Number(window.prompt("Enter a divident"));
    const divisor = Number(window.prompt("Enter a divisor"));

    if (divisor == 0) {
        throw new Error("You can't divide by zero") // argument: message
    }
    if (isNaN(divident) || isNaN(divisor)) {
        throw new Error("Values must be numbers")
    }

    const result = divident / divisor;
    console.log(`${divident} / ${divisor} = ${result}`);
}
catch (error) {
    console.error(error);
}

console.log("You have reached the end");