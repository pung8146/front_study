let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0]);


for (let i = 1; i < count; i++) {
    let A = Number(input[i][0]);
    let B = Number(input[i][1]);
    console.log(A + B);
}

// 첫번째에 테스트케이스 갯수가 들어가는걸 못봤음..