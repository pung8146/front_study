let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numbers = [];
let answer = '';

let testcase = Number(input[0]);

let A = Number(numbers[i][0]);
let B = Number(numbers[i][1]);


for (let i = 0; i <= testcase; i++) {
    console.log(`Case #${i + 1}: ${A + B}`);
}

// 1. 숫자 받는거 알겠음 input으로받는거임
// 2. 그러나 두번째 정수받는건 어떻게?