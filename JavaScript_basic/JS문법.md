### JavaScript ###


## 변수 ##
var A = 1+2; => 변수 이름 (선언하다,대입하다) 값
선언문 명령문이라고함 , 그래서 ; 명령하는거라 들어감
초기화 한다고도 함 !

# null #
바꿀때 null 바꿔주면 다른개발자가 인지하기에도 좋음

@변수는 어떤 정보에 이름을 붙여서 저장하고싶을때 사용
ex)name = "mike"; age=30; (위험한방식) 
++;세미클론은 끝났다는걸 표시 안써도되지만 쓰는걸 추천

@alert() 경고 팝업 

@console.log() 콘솔창에서 알려줌

@let : 변할 수 있는값은 let선언
    ex) let name = "Mike";
@const : 변하지 않는 값은 const 왠만하면 const로 하고 차후에 let로 변경   
 @@ 1. 변수는 문자와 숫자, $와 _만 사용 ex)let_ 1; let $ = 3
    1. 첫글자는 숫자가 될 수 없습니다. 
    2. 예약어는 사용할 수 없습니다.
    3. 가급적 상수는 대문자로 알려주세요 ex) const MAX_SIZE = 99;
    4. 변수명은 읽기 쉽고 이해할 수 있게 선언

@자료형 
    "" = '' 차이 별로없음 그래도 ""가좋음
    `` 은 문자열 내부 변수를 사용할때 사용하면 편리함
    ex)`나는 ${30+1}살 입니다`;
@숫자형
    숫자형은 사칙 연산이 가능 
    NaN = not a number 숫자작업할때 안나오는지 확인

@Boolean
    true; 는 / false; 거짓

@ null 과 undefined
 null 은 존재하지않는값 / undefined 값이 할당되지 않았음
 ** null 은 객체가 아니지만 버그와 아래버전 호환성유지해서 객채로표시됨

@typeof 연산자는 변수의 자료형 종류를 알아낼수있음
 보통 자기가 아닌 다른 동료개발자가 종류를 알아날때 쓰이기도함

## 대화상자 ##

@alert 알려줌

@prompt 입력 받음
프롬프트는 인수를 두개받을수있음 // 문자형으로 받는다
ex)prompt("예약일을 입력해주세요.", "2020-10-)
@confirm 확인 받음

============

String() => 문자형으로 변환

Number() => 숫자형으로 변환
// 안에 문자가있으면 NaN 이 되고 // treu , false 1과 0으로 나옴
Boolean() => 불린형으로 변환
// 숫자 0, 빈문자열 "" , null , NaN, undefined ==> false 외는 true

@@주의사항
외우기 :: Number(null) 0 , Number(undefined) NaN

Number(0) // false
Number("0") // true

Number("") // false
Number(' ') // true

============    

## 연산자 (Operators) ##
@나머지는 홀수와 짝수 구분 / 숫자체크 등 사용가능
@2 ** 3 = 8 거듭제곱
@ num++; 와 ++num; 의 값은 다르다 나중에 증가시키냐 , 먼저 증가시키냐 차이

===============

## 동등연산자 ##
const a = 1;
const b = "1";

console.log(a == b); = true
console.log(a === b); = false 타입값까지 비교 [일치연산자]

===========

## 조건문 ##

#if , else , else if
else는 if가 false 일때 실행이 됨
순서는 if , else if , else 순으로 작성

# switch 문의 기본 형식 #
switch (조건식) {
     case 비교조건식 :
     동작문;
 }
스위치는 조건식 비교조건식이 같아야 실행이 된다.

케이스 아래 구문이 한번 실행되면 그아래도 다 실행됨
switch (조건식){
    case A :
        console.log('A 틀림');
    case B :
        console.log(' B 맞음');
    case C :
        console.log(' C 틀림');
}
실행결과는 B 맞음 , C 틀림 이 실행됨
===========

## 조건부 연산자 ##

조건부 연산자의 기본형식 

조건식 ? 참일때 실행되는식 : 거짓 일때 실행되는 식
ex) 5 > 0? '참 입니다': '거짓입니다';


## 논리 연산자 ##

|| (or)
여러개중 하나라도 true면 true
즉하나라도 true면 false
&& (and)
모든값이 true일때 true
즉 하나라도 false 일때 false
!(not)
true 면 false 
false 면 true 로 바꿔줌

#평가#는 or는 첫번째 true를 발견 하는 즉시 평가를멈춤
and는 false를 발견하면 멈춤
ex)좋은시력(90프로),운전면허소지(60프로),여군(7프로) 라면
여군중에 운전면허소지한 시력이좋은사람 ->이러면 여군에서 93프로 불필요데이터 거름
이것이 최적화 방법

문제1 이름 TOM 이거나 , 성인이면 통과

const name = "MIKE";
const age = "30"

if(name === "TOM" || age > 19 ){
    console.log("통과");
} else {
    console.log("탈락");
}

문제2. 나이를 입력받아 성인이 아니면 돌아가 표시
<<<<<<< HEAD
=======

const age = prompt("나이 입력해주세요"); 

if(age > 19) {
    console.log("통과");
} else { 
    console.log("탈락");
}

내가쓴문제

const age = prompt('나이를 입력해주세요');
const isAdult = age > 19;

if(!isAge){
    console.log("돌아가"); 
}

문제3. 남자이고, 이름이 Mike 이거나 성인이면 통과

const gender = "F";
const name = "Jane"
const isAdult = true;

// if(gender === "M" && name === "Mike" || isAdult){
if(gender === "M" && (name === "Mike" || isAdult)){
    console.log("통과");
} else { 
    console.log("e돌아가");

const age = prompt("나이 입력해주세요"); 

if(age > 19) {
    console.log("통과");
} else { 
    console.log("탈락");
}

내가쓴문제

const age = prompt('나이를 입력해주세요');
const isAdult = age > 19;

if(!isAge){
    console.log("돌아가"); 
}

문제3. 남자이고, 이름이 Mike 이거나 성인이면 통과

const gender = "F";
const name = "Jane"
const isAdult = true;

// if(gender === "M" && name === "Mike" || isAdult){
if(gender === "M" && (name === "Mike" || isAdult)){
    console.log("통과");
} else { 
    console.log("e돌아가");
}

============

## 반복문(for, while, do while) ##

1. for문 

for(let i = 0; i < 10; i++) {
    // 반복할 코드 for문
}
※참고로 for문의 시작, 조건식 , 생략가능 (무한반복 날수있음)

2. while문
let = 0;

while(i<10){
    console.log(i);
    i++;
}

3.do..while문

let i = 0;

do{
    //코드
    i++;
}while(i<10)

while문 과 차이점 : 한번은 무조건 실행시킴!!
** 반복문은 연습이 필요함  !! ** 
=====================

## break , continue ## 

1. break : 멈추고 (반복문)빠져나옴
2. continue : 멈추고 다음 (반복문)으로 진행
※while(true는 무한반복이라 조심해야됨)
#break
while(true){
    let answer = confirm("계속 할까요?');
    if(!answer){
        break;
    }
} 
#continue
#짝수만

for(let i = 0 ; i < 10; i++ ){
    if(i%2){
        continue;
    }
    console.log(i)
}

TIP: 정확한 횟수가 표기되어있으면 for / 횟수가 지정되어있지 않으면 while 을 추천
=============================

## switch ##

tip. switch문은 if else 문을 알면 다 대치할 수 있음
tip2. case가 다양할 경우 사용할수있음

switch(평가){       if(평가 == A){
    case A :            // A일때 코드
    // A일때 코드   } else if (평가 == B){
    case B :            // B일때 코드
    // B일때 코드      }
}
@두 코드는 일치함

let fruit = prompt('무슨과일을 먹고싶으신가요?');

switch(fruit){
    case '사과':
        console.log('100원 입니다');
        break;
    case '바나나':
        console.log('200원 입니다');
        break;
    case '딸기':
        console.log('300원 입니다');
        break;
    case '멜론':
    case '수박':
        console.log('400원 입니다');
        break;
    default : 
        console.log("그런과일은 팔지않습니다");
        break;
}
@ break를 만나기전까지 계속 실행시킴

================

## 함수 (function) ##

함수는 여러곳에 사용되는곳에 기능들을 미리 만들어줌
ex)내장함수 console,alert,confirm
*매개변수는 없을수도 여러개일수도 있음

↓함수     ↓함수명 ↓매개변수
function sayHello(name){
    console.log(`Hello,${name}`};
}

sayHello(Mike); // 호출법

*매개변수가 없는 함수
function showError(){
    alert('에러메세지');
}

showError(); // 호출

*매개변수가 있는 함수
funciton sayHello(name){
    const msg = `Hello, ${name}`;
    console.log(msg);
}

sayHello('Mike');
sayHello('Tom');

*전역 변수와 지역변수
 let msg = "Hello";
 console.log(msg) // Hello 출력
  
 function sayHello(name){
     if(name){
         msg += `, ${name}`;
     }
     console.log(msg); // Hello Mike 출력
 }

 sayHello('Mike');
 console.log(msg); // Hello Mike 출력
 // 함수호출에도 저장이됨



*전역 변수와 지역변수2

let msg = "welcome";

function sayHello(name){
    let msg = "Hello"
    console.log(msg + '' + name);
}

sayHello('Mike'); 
console.log(msg) // welcome이 출력

*전역 변수와 지역변수 3

let name = "Mike";

function sayHello(name){
    console.log(name)
}

sayHello(); // undefined가 출력
sayHello('Jane'); // Jane이 출력
// 매개변수로 받은값은 함수의 지역변수가 된다.
Tip.전역변수보다 지역변수가 많은걸 추천

// 전역변수와 지역변수 4 // or

function sayHello(name){
    let newName = name || 'friend';
    let msg = `Hello, ${newName}`
    console.log(msg)
    }
}

sayHello(); // Hello , friend 가출력
sayHello('Jane'); // Hello, Jane이 출력

// 전역변수와 지역변수 5 default value

function sayHello(name = 'friend'){
    let msg = `Hello, ${newName}`
    console.log(msg)
    }
}


sayHello(); // Hello , friend 가출력
sayHello('Jane'); // Hello, Jane이 출력

// return 으로 값 반환

funciton add(num1, num2){
    return num1 + num2;
}

const result = add(2,3);
console.log(result) // 함수를 종료하는 목적으로 사용하기도함

Tip. 함수는 한번에 한작업만 하는게좋음
TIp2. 읽기 쉽고 어떤동작인지 보여주는 함수명 정하는게좋음
========================

## 함수 선언문 vs 함수 표현식 ##

function sayHello(){
    cosnole.log('Hello');
}

sayHello();
// 함수 선언문 : 어디서든 호출가능


let sayHello = function(){
    cosnole.log('Hello');
} // 함수표현식 

sayHello();

================

## 화살표 함수 ###

let add = function(num1, num2){
    return num1 + num2;
}
↓ 화살표함수로 표현 ↓
let add = (num1, num2) => {
    return num1 + num2;
}
*return문을 중괄호가아닌 일반괄호로 변경가능
*return문이 한줄이라면 괄호도 생략가능
*인수가 딱하나라면 괄호 생략가능
*만약 인수가 없다면 괄호 생략가능
*return 문이 있더라도 여러 줄이있다면 생략불가능 


ex)
// 화살표 함수 1
let showError = () => {
    console.log('error');
}

=================== 

 ## Object ##
 
 const superman = {
     name = 'clack',
     age = '33',
 }

@Object 
@접근
superman.name // 'clack'
superman['age'] // 33

@추가
superman.gender = "male";
superman.['hairColor'] = 'black';

@삭제 
delete superman.hairColor;

@Object - 단축 프로퍼티

const name = 'clark';
const age = 33;

const superman = {  
    name:name,
    age:age,
    gender:'male',
}
↕ 이렇게 사용할수 있음 ↕
const superman = {
    name, 
    age,
    gender:'male',
}

@Object - 프로퍼티 존재 여부 확인
    superman.birthDay;
    //undefined
    'birthDay'in superman;
    //false
    'age'in superman
    //true
 // in을 사용하는경우 어떤값이 넘어올지 확실히모를때
 // 함수인자로 받거나 api통신으로 받을때

======================

## for ... in 반복문 ##
// 객채를 순회하면서 값을 얻어낼수 있음

for(let key in superman){
    console.log(key)
    console.log(superman[key])
}

ex)
function isAdult(user) {
    if (!('age' in user) || // user에 age가 없거나
        user.age < 20) { // 20살 미만이거나
    return false;
    }
    return true;
}

ex)객체 for ... in 문 예제
const Mike = {
    name: "Mike",
    age: 30
};

for(x in Mike){
    console.log(x) // "name" , "age" 를 가져옴
    console.log(Mike[x]) // Mike[age]를가져옴
}
=========================

## 객체(Object)- method, this ##

객체는 자료형의 일종으로 다양한값을 모아둔 또다른 값입니다.
종류는 크게 : 배열 , 함수 , 배열이나 함수가 아닌 객체 로 나눌 수 있습니다.

@method: 객체 프로퍼티로 할당 된 함수
ex)
const superman = {
    name: 'clack',
    age: '33',
    fly : function(){  //함수로 작성가능 function 생략가능
        console.log('날아갑니다');
    }
}
superman.fly();
// 날아갑니다.

@객체와 메소드의 관계
const user= {
    name: 'Mike',
    sayHello:function(){
        console.log(`Hello,i'm ${this.name}`); 
        // ${this.name} 은 문제가일어날수있음
    }
}
user.sayHello();

ex)
let boy = {
    name: 'Mike',
}

let girl = {
    name: 'Jane',
}

sayHello : funciton(){
    cosnole.log(`Hello,i'm${this.name}`); // 이때 this는 정의되지않음
}

boy.sayHello(); // i'm MIke
girl.sayHello(); // i'm Jane
// this는 실행하는시점(runtime)때 정의됨

@화살표 함수로 호출하면 달라짐
=>화살표 함수는 일반함수와 달리 자신만의 this를 가지지 않기때문에
  화사라표 함수 내부에서 this를 사용하면, 
  *그 this는 외부에서 값을 가져 옴
ex)
let boy = {
    name: 'Mike',
    sayHello: () =>{
        console.log(this); // 전역개채를 가리킴
    }
}

tip.브라우저환경 : window, Node.js:global

boy.sayHello();
this != boy

@ method

let boy = {
    name: "Mike",
    showName: function () {
        console.log(boy.name) // 에러 출력
        console.log(this.name) // "Mike"출력
    }
};

boy.showName();

let man = boy;
boy = null;

man.showName();  // 에러출력 
결론 : 메소드에서 객채명을 직접써주는것보다 this를 더선호

@화살표 함수 경우

let boy = {
    name: "Mike",
    showThis: function () {
    console.log(this) 
    }
};

boy.sayThis(); // 객체를 반환해줌


let boy = {
    name: "Mike",
    showThis: () => {
    console.log(this) 
    }
};

boy.sayThis(); // 화살표 함수로 작성하면 window를 가리킴
결론 객체의 메소드를 작성할때 화살표 함수 사용은 안하는게좋음

======================

## Array(배열) ##
: 순서가 있는 리스트

1번에 철수 
2번에 영희
...
30번에 영수

함수로표현하면
                  0      1         29
let students = ['철수','영희',...'영수'];

이때 이름들을 요소라고함
인덱스 0, 인덱스1 라고 불러도됨


# 배열의 특징 #
: 배열은 문자 뿐만 아니라, 숫자, 객체, 함수등도 포함할 수 있음
ex)
let arr = [
    '민수',
    3,
    false,
    {
        name: "Mike",
        age: 30,
    },
    function(){
        console.log('TEST');
    }
];
# length #  
: 배열의 길이, push():배열 끝에 추가,pop():배열 끝 요소 제거

# unshift, shift #
 배열 앞에 추가 제거 /추가 unshift , 제거는 shift

# splice #
const arr = ['a','b','c','d','f','g'];
[중간삭제]arr.splice(2,3) -> ( c, d ,f )가 삭제됨
[기준점삭제]arr.splice(3) -> (a b) 남고 다사라짐
[삭제후추가]arr.splice(1,3,'타','파') -> ['a','타','파','f','g']
[도중추가]arr.splice(2,0,'다') ->['a','b','다','c',,,,]

# (소)배열에서 요소찾기 #
includes 로 배열의 특정요소 찾기
const arr = ['a','b','c','d'];
const result = arr.incoludes('a'); true 면 있음
const result = arr.incoludes('f'); false면 없음
보통 true / false 있는건 조건문에서 사용

# 검색하고 싶은 값이 몇번째 인덱스인지 찾기 #
indexOf 와 lastIndexOf
const arr = ['a','b','a','b','a','b'];
const result = arr.indexOf('b'); 앞에서 부터 찾음 값은1
const result = arr.lastIndexOf('a'); 뒤에서부터 찾음 값은4
const result = arr.indexOf('x'); 없으면 값 (-1)

# 배열의 마지막 요소 찾는법 #
ex)findLastElement[findLastElement.length - 1]
무조건 전체 길이의 -1이 마지막요소

# 배열 요소 추가하기 #
배열의 길이를알때
  const target ['1','2','3','4'];
  target[4]= "5"; 
배열의 길이를 모를때
  const target ['1','2','3','4'...'?'];
  target[target.length]]= "55"

# (소)배열 반복하기 #
배열은 값들을 나열 한것이기때문에 반복문에 사용할때가 많음(while for)
const arr = ['a','b','c','d'];
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}



## const 배열 바뀌는 이유 ##
const 의 배열이 바뀌는게 아니라 내부 객체가 바뀌는것이기때문!
const 는 상수(엄밀히는 아님)로생각
새로운값을 =(대입) 하지못하는것!!!

======================================


@반복문 : for 
:배열을 사용하는 가장 큰이유는 반복을 위해서
tip1: length 를 통해서 길이를 알수있어 for문 사용가능
tip2: index=0부터 시작하게함

@반복문 : for ... of
:for in 은 추천하지않음
 
 ## 중첩된 반복문 ##
 ex)1 한번 직접 계산해보기
 for (let i = 0, i < 10; i++) {
     for (let j = 0; j < 10; j++) {
         console.log(i, j);
     }
 }
 ex)2 한번 직접 계산해보기
 for (let i = 0; i< 5; i++){
     if (i % 2 === 0 ) continue;
     for (let j = 0; j < 5; j++) {
         if(j % 2 === 0 ) continue;
         for(let k = 0; k < 5; k++){
             if (k % 2 === 0 ) continue,
             console.log(i,j,k);
         } 
     }
 }
 i == 0 , continue,
 i == 1 , j == 0 , continue
 i == 1, j == 1, k == 0 , continue,
 i == 1, j == 1, k == 1, consoelog(1,1,1);
 i == 1  j == 1, k == 2 continue
 i == 1  j == 1, k == 3 console.log(1,1,3);
 i == 1  j == 1, k == 4 continue
 i == 1  j == 2, continue
 i == 1  j == 3, k == 0 continue
 i == 1  j == 3, k == 1 console,log(1,3,1);
...
 내예상 console.log(1,1,1);console.log(3,3,3); 
 답은 cosnole.log(1,1,1);console.log(1,1,3);
 맨아래 조건부터 하나씩 올라가야함!

## .repeat() ##
.repeat() – 문자열을 반복한 값을 반환하는 메서드입니다. IE는 Edge부터 지원합니다.

문법
string.repeat( count )
예제
'abc'.repeat( 2 )
abc를 두 번 반복한 abcabc를 반환합니다.

## <코드> 사용법 ##
document.querySelector()
document.querySelectorAll() // 두개이상부터
document.querySelector('선택자 내부선택자 내부선택자 ... ')

## 유사 배열 ##

## 리스너 함수 / 콜백함수 / 익명함수 #

## textContent ##
화면에 내용을 변경할때는 대부분 textContent

## value ##
화면에 내용을 바꿔줄때
input ,, 등 값은 value로 변경