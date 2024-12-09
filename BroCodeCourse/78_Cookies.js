// cookie = a small text file stored on your computer
//          used to remember information about the user
//          saved in name=value pairs

// check if cookies are enabled
console.log(navigator.cookieEnabled);

// add cookie
document.cookie = "firstName=Spongebob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"; // path=/ default path
document.cookie = "lastName=SquarePants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
console.log(document.cookie); // document.cookie is an object

// delete cookie: set an expiration date that has already passed
document.cookie = "firstName=Spongebob; expires=Sun, 1 January 2000 12:00:00 UTC; path=/";
console.log(document.cookie);

// -------- function CREATE cookie --------
function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000)); // setTime, getTime in milliseconds
    let expires = "expires=" + date.toUTCString();
    // console.log(`date: ${date}`);
    // console.log(`UTCString: ${date.toUTCString() }`);
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

setCookie("email", "sponge@email.com", 365);
console.log(document.cookie);

// -------- function DELETE cookie --------
function deleteCookie(name) {
    setCookie(name, null, null);
}

deleteCookie("email");
deleteCookie("firstName");
deleteCookie("lastName");

// -------- function GET cookie by name --------
function getCookie(name) {
    // c = cookie
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        // if "element" starts with "name"
        if (element.indexOf(name) == 0) {
            result = element.substring(name.length + 1)
        }
    })
    return result;
}

console.log(getCookie("firstName"));

// --------------------------------------------------------------

// ----------------- HTML -----------------
// <label for="firstText">First name:</label>
// <input id="firstText" type="text"><br>
// <label for="lastText">Last name:</label>
// <input id="lastText" type="text"><br>
// <button id="submitBtn">Submit</button>
// <button id="cookieBtn">Get Cookies</button>
// <button id="deleteBtn">Delete Cookies</button>
// <script src="main.js"></script>

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");
const deleteBtn = document.querySelector("#deleteBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});

cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

deleteBtn.addEventListener("click", () => {
    deleteCookie("firstName");
    deleteCookie("lastName");
});

function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name) {
    setCookie(name, null, null);
}

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    cArray.forEach(element => {
        if (element.indexOf(name) == 0) {
            result = element.substring(name.length + 1);
        }
    });
    return result;
}

console.log(document.cookie);