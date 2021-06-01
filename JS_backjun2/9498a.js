let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ");

let A = Number(input[0]);

if (90 <= A <= 100) {
    console.log('A');
} else if (80 <= A <= 89) {
    console.log('B');
} else if (70 <= A <= 79) {
    console.log('C');
} else if (60 <= A <= 69) {
    console.log('D');
} else {
    console.log('F');
}
// 아 소수가 있을수 있구나 !