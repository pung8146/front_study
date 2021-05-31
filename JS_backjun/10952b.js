let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let input = [];

for (let i = 0; ; i++) {
  let A = +input[i].split(' ')[0];
  let B = +input[i].split(' ')[1];

  let result = A + B;

  if (!result) {
    break;
  }
  console.log(result);
}
