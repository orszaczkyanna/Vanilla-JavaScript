// Fisher-Yates algorithm

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
shuffle(cards);
console.log(cards);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        // 0 és i közötti random szám (az i-t is beleértve)
        console.log(`random:${random}, array[i]:${array[i]}, array[random]:${array[random]}`);
        [array[i], array[random]] = [array[random], array[i]];
    }
}