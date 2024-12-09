// function name(...rest){} ---> rest array

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 3, 4, 6));

function getAverage(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
}

console.log(getAverage(75, 100, 85, 90, 50));

function combineStrings(...strings) {
    return strings.join(' ');
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III")
console.log(fullName);