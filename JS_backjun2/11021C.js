let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testcase = Number(input[0]);

for (let i = 1; i <= testcase; i++) {

    let numbers = input[i].split(' ');

    console.log(`Case #${i}: ${Number(numbers[0]) +Number(numbers[1])}`);
}

// 1. 숫자 받는거 알겠음 input으로받는거임
// 2. 그러나 두번째 정수받는건 어떻게?