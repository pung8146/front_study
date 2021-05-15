let fs = require('fs');
let input = Nubmer(require('fs').readFileSync('/dev/stdin').toString());

let A = Number(input[0]);
let B = Number(input[1]);

let X = A + B;

for (let i = 1; i = T; i++ ) {
    let  answer = "Case #" + X; 
};

console.log(answer);

// 위 내가 한코드 fs 를 사용해봤음
// A B를 둘다 숫자로 받아야된다생각함
// 그러나 T 값을 어떻게 해야 할지 몰랐음

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
    if(input[i] !== '') {
        numbers.push(input[i].split(' '));
    }
}

for (let i = 0; i < numbers.length; i++){
    let A = Number(numbers[i][0]);
    let B = Number(numbers[i][1]);

    
    console.log(`Case #${i + 1}: ${A + B}`);
}


