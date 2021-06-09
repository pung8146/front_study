let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


// 1. 숫자를 임의로받음
//  1.5 숫자가 10보다 작으면 맨앞에 0을 붙여줌
// 2. 처음 그숫자를더한다 
// 3. 숫자를 네개로 자릿수대로 쪼갬 1 2 3 4
// 4. 2의 자릿수 + 4의 자릿수를 더함 (실행결과 누적 n + 1)
//  4.5 결과값이 원숫자와 같은가 => (정답 실행누적결과표시)
// 5. 다를경우 3으로 반복

let oriNum = 5;
let arr = ["0"];

let sumNum = '';

let count = 0;



if (0 < orinum < 10) {
    arr["0"] + oriNum.split(' ');
} else {
    return;
}