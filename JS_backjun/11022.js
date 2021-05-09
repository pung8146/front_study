const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const input = [];

rl.on('line' (line) => {
    numcase = input[0]
}).on('close', () => {
    const A = Number(input[i][0]);
    const B = Number(input[i][1]);

    process.exit();
})

for(i = 1; i >= numcase.length; i++){
    console.log(
        `"Case #${numcase}: A+B=${A+B}`
    );
}

// 위가 내코드
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const input = [] ; // 왜 하는걸까
rl.on('line', line => {
    input.push(line.split(' ')); // 왜 하는걸까
}).on('close', () => {
    const numcase = Number(input[0]);

    let result = '';
    for(let i=1; i<=numcase; i++){
        const A = Number(input[i][0]);
        const B = Number(input[i][1]);

        result += `Case #${i}: ${A} + ${B} = ${A+B}\n`;
    }

    console.log(result);
    process.exit();
})