const readline =  require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', line => {
    input.push(line.split(' '));
}).on('close' , () => {
  const star = '*'
  const numcase = Number(input[0]);

  for (let i=1; i<=numcase; i++){
    result = `${star}+\n`;
  }
  console.log(result);
  process.exit();
})

// 막히고있는 이유 별하나를 어떻게 출력해야되나

const readline =  require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', line => {
  const star = '*';
  const numcase = Number(input[0]);

  for (let i=1; i<=numcase; i++){
    for(let j=1; j=i;j++){
      console.log("start")
    }
  }
  console.log(result);
  process.exit();
}).on('close' , () => {
  console.log(result);
  process.exit();
})

// 2차시도
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line' , line => {
  const N = parseInt(line);

  let result = '';
  for(let row=0; row<N; row++){
    let stars = '';
    for(let col=0; col<=row; col++){
      stars += '*';
    }
    result += stars + '\n';
  }
  console.log(result);
}).on('close' , () => {
  process.exit();
})

// 위 코드는 넘어렵당 

let readline = require('readline');
let rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

rl.on('line', line => {
  let num = Number(input);
}).on('close', () => {
  for (let i=0; i<num; i++ ){
    for(j=0; i=j; j++){
      result += '*';
    }
    result += '\n';
  }
  console.log(result);
  process.exit();
})

// 위 readline으로 해봤음 안되서 슬픔


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

result = '';

for(let i=0; i < num; i++){
  for(let j=0; j<=i; j++){
    result += '*';
  }
  result += '\n';
}

console.log(result);

