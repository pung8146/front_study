// vs 코드에서먹히게 작성법

const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `1 2
`
).split('\n');

const a = Number(input[0]);
const b = Number(input[1]);

if( Number(a[0]) > Number(b[1])){
  console.log(">");
}else if(Number(a[0]) < Number(b[1])){
  console.log("<");
}else{
  console.log("==");
}

// 정답
const A = parseInt(input[0]);
const B = parseInt(input[1]);

if (A > B) {
  console.log('>');
} else if (A < B) {
  console.log('<');
} else {
  console.log('==');
}