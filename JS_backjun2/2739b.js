let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

for (let i = 1; i <= 9; i++) {

    console.log(`${n} * ${i} = ${n * i}`)
}

// 처음에는 모든 구구단을 계산하는줄알았는데
// ㅇ입력시 나오는 특정값을 표기하게해주면되었음