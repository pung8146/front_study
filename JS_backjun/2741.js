const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.on('line', (line) => {
    const input = line.split(' ');

    for (i=1; i<100000; i++){

        console.log(parseInt(input[0]+'\n'));
    }
}).on('close', () => {
    process.exit();
})

// 위에코드는 시간이 너무많이걸려 초과되어버림
let fs = require('fs');
let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let answer = '';

for (let i = 1; i <= input; i++) {
    answer += i + '\n';
}

console.log(answer);