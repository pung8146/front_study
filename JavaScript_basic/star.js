// 기초 별찍기


for (let i = 0; i<5; i++) {
    console.log('*'.repeat(i+1));
}

for (let i = 4; i < 5 ; i--) {
    console.log('*'.repeat(i+1));
} // 내가한 역삼각형

for (let i = 5; i >= 1 ; i -= 1) {
    console.log('*'.repeat(i));
} // 해설 역삼각형

for (let i = 0; i <= 1 ; i -= 1) {
    console.log('*'.repeat(i+5));
} // i 가 0값일때 내가푼풀이

for (let i = 0; i < 5 ; i += 1) {
    console.log('*'.repeat(5 - i));
} // i 가 0값일때 해답

for (let i = 0; i < 5 ; i += 1) {
    console.log('*'.repeat((2*i) + 1));
} // 1,3,5,7,9 출력 나의풀이

for (let i = 0; i < 5 ; i += 1) {
    console.log('*'.repeat(9 - (2*i)));
} // 1,3,5,7,9 역출력 나의풀이

for (let i = 0; i < 5 ; i += 1) {
    console.log(' '.repeat(i)+'*'.repeat(5-i));
} // 오른쪽 역정렬 별 나의풀이

for (let i = 0; i < 5 ; i += 1) {
    console.log(' '.repeat(5-i)+'*'.repeat(i+1));
} // 오른쪽 정렬 별 나의풀이

for (let i = 0; i < 5 ; i += 1) {
    console.log(' '.repeat())+'*'.repeat(1+(2*i))+' '.repeat();
} // 마름모 나의풀이 막혔음 이제 repeat로 푸는거 말고 J로 넣어서 풀어야할꺼같음!!
