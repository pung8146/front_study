const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process,stdout
});

// const input = [];

// rl.on('line', (line) => {
//     input.push(line.split(' '));
// }).on('close', () => {
//     const T = parseInt(input[0]);
//     for( i = 1; i <= 100000; i++){
//         T += 1

//         };
//         console.log()
// }).on('close', () => {
//     process.exit();
//   })

// 위에 반복문 으로 하고싶었는데 안됨 ..

const finiteSum = (N) => {
    return N*(N+1)/2; // 가지수 
}

rl.on('line', line => {
    const input = parseInt(line);
    console.log(finiteSum(input));
}).on('close', () => {
    process.exit();
})