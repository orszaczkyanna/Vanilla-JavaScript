// .toLocaleString() = returns a string with a language sensitive representation of a number

//                     .toLocaleString("locale", {options});

// locale = specify the language (undefined = default set in browser)
// options = object with formatting options

const number = 123456.789

// ------------------------------- NUMBER -------------------------------
let text;

text = number.toLocaleString("de-DE"); // Standard German | 123.456,789
text = number.toLocaleString("en-GB"); // British English | 123,456.789
text = number.toLocaleString("en-US"); // US English | 123,456.789
text = number.toLocaleString("ja-JP"); // Japanese | 123,456.789
text = number.toLocaleString("de-AT"); // Austrian German | 123 456,789
text = number.toLocaleString("hu-HU"); // Hungarian | 123 456,789
text = number.toLocaleString("pl-PL"); // Polish | 123 456,789
text = number.toLocaleString("hi-IN"); // Hindi | 1,23,456.789

text = number.toLocaleString()          // using locale settings
text = number.toLocaleString(undefined) // using locale settings

console.log(text);

// ------------------------------- CURRENCY -------------------------------
let currency;

currency = number.toLocaleString("en-GB", { style: "currency", currency: "EUR" }); // €123,456.79
currency = number.toLocaleString("de-DE", { style: "currency", currency: "EUR" }); // 123.456,79 €
currency = number.toLocaleString("hu-HU", { style: "currency", currency: "HUF" }); // 123 456,79 Ft
currency = number.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }); // ￥123,457
currency = number.toLocaleString("hi-IN", { style: "currency", currency: "INR" }); // ₹1,23,456.79

console.log(currency);

// ------------------------------- DATE -------------------------------
const date = new Date();
let dateText;

dateText = date.toLocaleString(); // using locale settings

dateText = date.toLocaleString("hu-HU"); // 2024. 06. 28.
dateText = date.toLocaleString("ja-JP"); // 2024/6/28
dateText = date.toLocaleString("en-US"); // 6/28/2024
dateText = date.toLocaleString("de-DE"); // 28.6.2024
dateText = date.toLocaleString("de-AT"); // 28.6.2024
dateText = date.toLocaleString("pl-PL"); // 28.06.2024
dateText = date.toLocaleString("en-GB"); // 28/06/2024
dateText = date.toLocaleString("hi-IN"); // 28/6/2024

dateText = date.toLocaleString("hu-HU", { dateStyle: "full" }); // 2024. június 28., péntek
dateText = date.toLocaleString("ja-JP", { dateStyle: "full" }); // 2024年6月28日金曜日
dateText = date.toLocaleString("en-US", { dateStyle: "full" }); // Friday, June 28, 2024
dateText = date.toLocaleString("en-GB", { dateStyle: "full" }); // Friday 28 June 2024
dateText = date.toLocaleString("de-DE", { dateStyle: "full" }); // Freitag, 28. Juni 2024
dateText = date.toLocaleString("de-AT", { dateStyle: "full" }); // Freitag, 28. Juni 2024
dateText = date.toLocaleString("pl-PL", { dateStyle: "full" }); // piątek, 28 czerwca 2024
dateText = date.toLocaleString("hi-IN", { dateStyle: "full" }); // शुक्रवार, 28 जून 2024

dateText = date.toLocaleString("hu-HU", { dateStyle: "full", timeStyle: "full" }); //2024. június 28., péntek

console.log(dateText);