let matrix = [];
let count = 1;

for (let i = 0; i < 3; i++) {
    matrix[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix[i][j] = count;
        count++;
        // console.log(`${count}. i=${i}, j=${j}`);
    }
}

// matrix[0][0] = 0;
// matrix[0][1] = 1;
// matrix[0][2] = 2;

for (let row of matrix) {
    const rowString = row.join(' ');
    console.log(rowString);
}