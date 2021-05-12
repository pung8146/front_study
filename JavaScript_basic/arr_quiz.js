// 다음배열에서 '라'를 모두제거하세요 indexOf,splice사용
// ** TIP 모두란말이 나오면 반복문 일확률이 높음
// 반복문작성시 공통된거 찾음
// 반복문은 조건이 내가 원할때 트루여야하고 아닐때 false일때 로 생각
/* 
if(arr.indexOf(1)) => 첫번째 객체로 찾으면 0값이 들어오기에
if 문에 false가 되는 여섯가지 중하나가 되기에 false가됨
보통 indexOf(1) > -1 보다클때가 조건으로 많이주어짐
*/ 
const arr = ['가','라','다','라','마','라',];

const result1 = arr.indexOf['라'];
console.log(result1);

arr.indexOf('라');
arr.splice(1,1);

arr.indexOf('라');
arr.splice(2,1);

arr.indexOf('라');
arr.splice(3,1);

arr.indexOf('라'); // -1 나오면 없음

while(arr.indexOf('라') !== -1){
    arr.splice(arr.indexOf('라'), 1)
};

// 둘의 값이 틀린이유 
let index = arr.indexOf('라');
while(index > -1) {
    arr.splice(index, 1);
}
// 무한 함수에걸려버림


let index = arr.indexOf('라');
while(index > -1) {
    arr.splice(index, 1);
    index = arr.indexOf('라');
}
// 라가 전부삭제되어 잘나옴