let fs = require('fs');
let input = fs.readFileSync('/dev/stdin/').toString().spilt(' ');

let num = Number(input[0]);

result = '';

const N = Number(input[i][0]);
const X = Number(input[i][1]);

for(i=1; i <= num; i++){
   result += ' '; 
}

// N 의 인자값들을 모두 출력하고싶음
// 거기서 N 의 인자에서 (N(인자) - X) < 0 인것만 출력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let inputs = [];
inputs = input[0].split(' ');
// console.log(inputs); --> ['10' , '5']

let total = Number(inputs[0]);
let limit = Number(inputs[1]);

let numbers = [];
numbers = input[1].split(' ');
// console.log(numbers); [ '1', '10', '4', '9', '2', '3', '8', '5', '7', '6' ]

result = '';
for (let i = 0; i < total; i++) {
    if (Number(numbers[i]) < limit ) {
        result += numbers[i] + ' ';
    }
}

console.log(result);