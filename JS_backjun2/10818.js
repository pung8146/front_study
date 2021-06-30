// 1. 받아온 배열을 내림차순으로 정렬한다
// 2. 그 배열에서 첫번째와 마지막 번째 숫자를 출력한다.


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let testCase = Number(input[0])
var arr = [];

for (let i = 1; i <= testCase; i++) {
    arr.sort(function(a,b) {
        return a - b;
    });
    
}
