let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);
let answer = '';


for (let i = 1; i <= num; i++) {
    answer += i + "\n";
}
console.log(answer);

// 1. num.length 가 아닌이유 num 의 첫번째 배열의값이지 length 의 길이 만큼반복이 아니니까