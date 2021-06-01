let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

if ((A > 0 && B > 0)) {
    console.log("1");
} else if ((A < 0 && B > 0)) {
    console.log("2");
} else if ((A < 0 && B < 0)) {
    console.log("3");
} else if ((A > 0 && B < 0)) {
    console.log("4");
}