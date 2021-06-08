let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let count = Number(input);

let star = '';

for (let i = 0; i < count; i++) {

    for (let n = 0; n <= i; n++) {
        star += "*";
    }
    star += '\n';

}
console.log(star);