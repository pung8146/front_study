let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);

while(i<num){
 let A = Number(input[i][0]);
 let B = Number(input[i][1]);

 console.log(A+B);
}

// 위에가 내가 한코드

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let input = [];
  
for(let i=0; ; i++){
  let A = +input[i].split(' ')[0];
  let B = +input[i].split(' ')[1];

  let result = A + B ;

  if(!result) {
    break;
  }
  console.log(result);
}
