// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       JavaScript can access the DOM to dynamically
//       change the content, structure, and style of a web page.

document.getElementById(""); // document is an OBJECT
console.log(document);
console.dir(document); // list all the properties of this object

document.title = "My website";
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";
document.body.style.color = "white";

// <h1 id="welcome-msg">Welcome </h1>
const username = ""
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? "Guest" : username;

const myParagraph = document.createElement("p");
myParagraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
document.body.appendChild(myParagraph);