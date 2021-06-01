let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split();

let A = Number(input[0]);

if ((A % 4 === 0) && ((A % 100 !== 0) || (A % 400 === 0))) {
    console.log('1');
} else {
    console.log('0');
}