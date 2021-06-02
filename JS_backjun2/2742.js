let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0]);
let answer = '';

for (let i = count; i > 0; i--) {
    answer += i + "\n";
};

console.log(answer);

// 1. i가 평소처럼 count 보다 작거나 크면 마이너스대로 무한히 작아지니까 성립 X
// 2.