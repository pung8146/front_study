const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let input = [];

const A = Number(input[0]);
const B = input[1];

let num3 = A * Number(B[2]);
let num4 = A * Number(B[1]);
let num5 = A * Number(B[0]);
let num6 = A * Number(B);


console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);