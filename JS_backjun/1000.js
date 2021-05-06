const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
    const input = line.split(' ');

    const a = parseInt(input[0]);
    const b = parseInt(input[1]); 

    
    console.log(a + b);

    rl.close();
}).on('close', () => {
  process.exit();
});