let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testcase = Number(input[0]);

let A = Number(input[i][0]);
let B = Number(input[i][1]);

for (let i = 1; i <= testcase; i++) {
    answer += A + B + "\n";
}

console.log(answer);