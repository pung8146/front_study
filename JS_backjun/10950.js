const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

const A = [];
const B = [];

rl.on("line", (line) => {
    for(let i = 0; i < 10 ; i++;){
        console.log(A[i]+B[i]);
    }
})

// 위 내가해본것

const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(line.split(' '));
}).on('close', () => {
    const T = parseInt(input[0]);
    for(let i=1; i<=T; i++){
        const A = parseInt(input[i][0]);
        const B = parseInt(input[i][1]);
        console.log(A+B);
    }

    process.exit();
})

// 어렵당