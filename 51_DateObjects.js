// Date(year, month, day, hour, minute, second, ms)
// month 0 = January (!index)
// hour in military time

// --------- Current Date and Time ---------
const currentDate = new Date();
console.log(currentDate);

// --------- Custom Date and Time ---------
// 2024.01.05. 15:30:45.500
const customDate1 = new Date(2024, 0, 5, 15, 30, 45, 500);
console.log(customDate1); // Jan 05 2024 15:30:45

const customDate2 = new Date("2024-01-05T15:30:45")
// const customDate2 = new Date("2024-01-05T15:30:45.500")
console.log(customDate2); // Jan 05 2024 15:30:45
// T: Time

const customDate3 = new Date("2024-01-05T15:30:45Z")
console.log(customDate3); // Jan 05 2024 16:30:45
// Z: UTC time

const epic = new Date(0);
console.log(`EPIC: ${epic}`); // Jan 01 1970 01:00:00

const customDate4 = new Date(1700000000000); // EPIC + 1700000000000ms
console.log(customDate4); // Nov 14 2023 23: 13: 20

// --------- Set Date ---------
const date = new Date(); // 2024.06.27. 01:33
date.setFullYear(2024);
date.setMonth(5); // index of June
date.setDate(27);
date.setHours(1);
date.setMinutes(33);
date.setSeconds(11);
date.setMilliseconds(613);

console.log(date); // Thu Jun 27 2024 01:33:11

// --------- Extract Individual Values ---------
// const date = new Date(); // 2024.06.27. 01:33
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate(); // !! getD̲a̲t̲e̲
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const millisecond = date.getMilliseconds();
const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday

console.log("year: " + year); // 2024
console.log("month (index): " + month); // 5 (index of June)
console.log("day: " + day); // 27
console.log("hour: " + hour); // 1
console.log("minute: " + minute); // 33
console.log("second: " + second); // 11
console.log("millisecond: " + millisecond); // 613
console.log("dayOfWeek (index): " + dayOfWeek); // 4 (index of Thursday)

// --------- Compate Dates ---------

const date1 = new Date("2024-12-31");
const date2 = new Date("2025-01-01");

if (date2 > date1) {
    console.log("HAPPY NEW YEAR!");
}

const differenceInDays = (date2 - date1) / (1000 * 60 * 60 * 24);
console.log(differenceInDays + " nap");