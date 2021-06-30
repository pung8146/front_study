// 1. 못푼이유 정렬 sort 의 사용법을 정확히모름
// 2. 두번째 숫자가 담긴 배열을 어떻게 받아야 할지 몰랐음
// 3. 맨처음과 마지막을 어떻게 추출해야 될지몰랐음
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    /*

    5	             [ '5', [ '20 10 35 30 7' ] ]
    20 10 35 30 7

    */

    const N = Number(input[0]);
    const numbers = input[1].split(' ').map(Number);

numbers.sort((a, b) => a - b);

console.log(numbers[0], numbers[N - 1]);
process.exit();
});