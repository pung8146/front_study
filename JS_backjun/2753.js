const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = Number(input[0]);

if ((a % 4 == 0) && ((a % 400 == 0) || !(a % 100 == 0))){
    console.log("1");
}else{
    console.log("0");
}

// 틀린이유 4의 배수일때를 빼먹음