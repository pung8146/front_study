let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let count = Number(input[0])
let star = '';

for (let i = 1; i <= count; i++) {

    for (let j = count; j > 0; j--) {
        star += "*";
    }
}