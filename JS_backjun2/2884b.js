let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().Split('\n');

let H = Number(input[0]);
let M = Number(input[1]);

let time = (H + M);

if (M > 45) {
    M -= 45;
} else if (H > 0 && M < 45) {
    --H;
    M += 15;
} else {
    H = 23;
    M += 15;
}
console.log(H);

// 1. 시간이 정해진다
// 정해진 시간에서 45분을 빼준다.
// 분을 최대 60분으로 
// 00:45 분 이전이면 24로 