const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.on('line', (line) => {
    const input = line.split(' ');

    console.log(parseInt(input[0]) - parseInt(input[1]));

    rl.close();
}).on('close' , () => {
    process.exit();
});