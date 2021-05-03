const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const A = Number(input[0]);
const B = Number(input[1]);

if ( A > 0 && B > 0){
    console.log("1");
}else if( A < 0 && B > 0){
    console.log("2");
}else if( A < 0 && B < 0){
    console.log("3");
}else {
    console.log("4");
}

// 위 틀린 문제 입력방식이 달라졌음
// https://velog.io/@wow/Node.js-%EC%9E%85%EB%A0%A5-%EB%B0%9B%EA%B8%B0
// 참고 레퍼런스


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  const X = input[0];
  const Y = input[1];

  if (X > 0) {
    if (Y > 0) {
      console.log(1);
    } else {
      console.log(4);
    }
  } else {
    if (Y > 0) {
      console.log(2);
    } else {
      console.log(3);
    }
  }
    process.exit();
});