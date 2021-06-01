let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split(' ');

let num = Number(input[0]);
let sum = 0;

for (let i = 1; i <= num; i++) {
    sum += i;
}

console.log(sum);


// 1. n 번째 숫자까지 배열에 저장한다
// 2. 그숫자들을 한번에 더한다.
// 3. 그것이 해결