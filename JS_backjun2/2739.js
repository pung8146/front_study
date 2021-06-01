let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 2; i <= 9; i++) {
    for (let n = 1; n <= 9; n++) {
        console.log(i + "*" + n + "=" + (i * n));
    }
}