// Promise = An Object that manages asynchronous operations.
//           (query a database, fetch a file, gather resources)
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// resolve – then – value; return
// reject – catch – error

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;

            if (dogWalked) {
                // console.log("You walk the dog 🐕");
                resolve("You walk the dog 🐕");
            }
            else {
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = false;

            if (kitchenCleaned) {
                resolve("You clean the kitchen 🧹");
            }
            else {
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = true;

            if (trashTakenOut) {
                resolve("You take out the trash ♻️");
            }
            else {
                reject("You DIDN'T take out the trash");
            }
        }, 500);
    });
}

walkDog().then(value => { console.log(value); return cleanKitchen() })
         .then(value => { console.log(value); return takeOutTrash() })
         .then(value => { console.log(value); console.log("Finished") })
         .catch(error => console.error(error));