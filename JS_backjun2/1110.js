let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 1. 숫자를 임의로받음
//  1.5 숫자가 10보다 작으면 맨앞에 0을 붙여줌
// 2. 처음 그숫자를더한다 
// 3. 숫자를 네개로 자릿수대로 쪼갬 1 2 3 4
// 4. 2의 자릿수 + 4의 자릿수를 더함 (실행결과 누적 n + 1)
//  4.5 결과값이 원숫자와 같은가 => (정답 실행누적결과표시)
// 5. 다를경우 3으로 반복


// 1. 숫자 임의값을 받는다 oriNum 
// 2. 처음 그 숫자를 더한다 나온결과값 sumNum
// 3. oriNum 의 오른쪽숫자 sumNum 의 오른쪽 숫자를 구한다
//  3.5. 이때 각각 10 보다 작은 숫자들은 왼쪽자리에 0 을 더해서 계산
// 4. 오른쪽 숫자들을 더한다 (이때 나온 결과값이 oriNum 으로) 이때 실행값 count++
//  4.5 sumNum = oriNum 다를경우 2 ~ 4 반복 
// 5. 카운트 갯수 표기


let oriNum = Number(input);
let sumNum = ' ';
let sumNum2 = ' ';

if (oriNum !== sumNum) {
    Number(oriNum * 10)
}
