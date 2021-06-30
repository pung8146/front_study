### front_study ###
프론트엔드 종합 메모

### false 되는값 ###
1. 문자열의 빈문자열 
2. boolean 의 false
3. 숫자 0
4. null , nudefined, NaN
5. documentAll

## 1000 번  A + B ? ##

JAVASCRIPT 로 값을 입력받기 위해서는 
모듈을 사용한다고 한다.

JS 에서 사용하기위해 모듈을 사용함 const fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' '); 

->?1 입력받는다 라는것은
사용자로부터 데이터의 입력을 받는다는것을 의미한다.
->?2 모듈 :
## 10869 번 a / b ##

 자바스크립트에서는 나누기 연산자를 이용해서 계산하면 소수점 까지 출력이 되는데, 위에서 문자열에서 숫자를 꺼내기 위해 사용한 parseInt를 이용하면 몫을 구할 수 있습니다. int라는 자료형은 정수를 의미해서 뒤에 소수점을 버리기 때문에 몫을 출력하는 것이 가능해집니다.


### fs ###
fs모듈 : 파일 시스템에 접근하는 모듈.
         즉, 파일을 생성하거나 삭제하거나 읽고 쓸수있습니다.

### parseInt ###
parseInt() - 문자열을 정수로 바꾸는 함수입니다.
ex) "3.14" -> parseInt('3.14') => 3
ex) parseInt("3월") => 3

### parseFloat ###
소수까지 표현
ex) "3.14" -> parseFloat('3.14') => 3.14

### Number ###
ex) "3.14" -> Number('3.14') => 3.14
ex) Number("3월") => NaN 

### readline ###
@readline 모듈은 한 번에 한 줄씩 Readable 스트림 (예 : process.stdin)에서 데이터를 읽기위한 인터페이스를 제공합니다. 다음을 사용하여 액세스 할 수 있습니다.
@readline 모듈은 데이터를 읽기위한 인터페이스를 제공해주는 모듈입니다. 아래와 같이 readline 모듈에 액세스 할 수 있습니다.

### require ###
요구하다 

### stdin ###
standard input

### stdout ###
standard output

## Node.js 입력받기 ##

* readline.Interface는 readline.createInterface() 메쏘드를 통해 생성 가능합니다.
* Node.js 문서에 나오는 readline 예시를 실행시켜 보면 다음과 같은 출력이 나옵니다.
* 기본적으로 매개변수 line에 할당되는것이 입력값이며, 문자열로 할당 됩니다.
<pre>
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function(line) {
  console.log("hello !", line);
  rl.close();
}).on("close", function() {
  process.exit();
});
</pre>
* fs모듈을 사용하면 readline 시간 초과가 나올때 사용하는것을 추천

# fs 모듈로 stdin을 로드 #
fs모듈을 이용하여 표준입력(stdin)을 파일을 동기적으로 불러오는방법
표준입력을 String형으로 변환후 공백을 기준으로 잘라줌
여러줄로 입력된 데이터일경우 split(\n) 으로 분리함

* 전체 파일을 먼저 읽어서 클라이언트로 전송한다.
  - 파일크기가 작으면 무시할 수 있지만 디스크 속도가 느리고 파일내용이 큰경우 차이가있다.

# readline을 사용 #
readline을 모듈을 사용해서 입력을 받는 방법이다.
line 이벤트는 스트림이 \n 을 받을때마다 발생합니다.


## 템플릿 리터럴(Template Literal) ##
ES6 부터 새로 도입된 문자열 표기법
문자열 생성시 따옴표대신, 백틱(`)을 사용한다'
EX1)` 뛰어쓰기
              가
                자유롭다`
EX2)표현식 삽입 : ${} 사이에 변수나 연산등을 삽입할 수 있게되었다.

## input.push(line.split(' '));  ##
이렇게 코드를 작성하면 input에는['val1', 'val2']와 같은 형태로 저장이 되겠죠. 이렇게 저장되는게 테스트 케이스 수 만큼 되니까, 만약 T가 2라면 input에는['T', ['val1', 'val2'], ['val1', 'val2']]`와 같이 저장이 됩니다.

## Event: 'line' ##
'line'마다 이벤트가 방출됟는 input 스트림 라인 종료입력
(수신 \n,\r 또는 \r\n) 이것은 일방적으로 사용의 enter or return 

## 복합 대인 연산자 +=, -=, *=, /=, ##
value += 10' 은
value = value + 10; 의미를가지며 변수를 생략할수있음.

## SCSS ##

## querySelectorAll vs querySelector ##

## idx ##
index number ?

## == 와 === 차이 #
== 비교형 
=== 문자열 까지 비교  

## innerHTML ##
html 태그로 인식해서 넣을수있음

## textContent ##
문자열만 넣을수있음

## navigator userAgent ##
navigator userAgent 함수를 사용하여
유저의 (접속 브라우저 , 모바일 기기) 를 파악할수있음
그러나!! 요새는 모더나이저 같은 JS라이브러리로
사용되는 경우가 더많음

## substr / substring ##

## 거듭제곱 ##
2 ** 3 = 8

## 형변환 ##
문자열 + 숫자 = 문자열
문자열 - 숫자 = NaN

## 컴퓨터의 부동소수점 계산 ##
컴퓨터는 2진법이기에 소수계산에서 생각한값이 나오지않을때가있음
보통 (소수 * 10 + 소수 * 10) / 10 = 으로계산

## 문자열 끼리 비교가능 ##
 'b' > 'a' true : 보통 사전순으로 커짐
 *특수문자도 비교가능 charCodeAt() 을 사용하면 알 수 있음

## 형변환 했을때 false 가 되는값 8가지 ##
false, ''(빈 문자열),0,NaN, nudefined, nullm doucment.all

## for 문을 보면 while문으로 서로 바꿔보는 연습 ##
별찍기 숙제 등등

## 조건문 에 들어가면 false 되는 6가지 ##
1. 문자열에 빈문자열
2. 숫자0
3. boolean false
4. null
5. undefined
6. NaN

## 함수 ##
선언방법
 1. function() {} 옜날 선언

 2. () => {} 요즘 방법

변수명 붙이는법
 1. function a() {} // 함수 선언문  
 2. const b = function() {} ;//함수 표현식
 3. const c = () => {}; //함수 표현식(화살표 함수)

## 콜백 ##
1. 익명함수는 주로 콜백에 쓰임
2. 콜백은 다른 함수가 실행을 끝낸 뒤 실행되는 — call back 되는 함수를 말한다.

## 매개변수와 인수 ##
1. 함수를 선언할때 파라미터(매개변수) / 호출 할땐 아큐먼트
<pre>
function a(parameter) {
  console.log(parameter);
}
a('argument');
</pre>
2. 함수가 하나의 매개변수와 하나의 인수만을 가지는것은 아닙니다.
   짝을 맟추어 이루어짐 / 
<pre>
function a (w, x, y, z) {
  console.log(w, x, y, z);
  console.log(arguments);
}
a('Hello', 'Paramter', 'Aregument');
</pre>
1. 위코드를 실행시
Hello Parameter Arguemnt undefined
Arguments(3) ['Hello', 'Parameter', 'Arguemnt'] 

## 객체 vs 리터럴 ##
둘다 여러개 변수를 하나로 묶어두는 역할이다.
배열 도 객체고 함수도 객체이다.
배열은 묶는 타입이 비슷비슷 할때
객체 리터럴은 배열이나 함수가 아닌애들중에서 특정모양을 가진애들을(각각 다른속성이라 이름을 붙여 구분해줘야할때)
객체 리터럴이라고 부른다.
1. 배열과 가장큰차이는 속성 마다 이름이 붙어있음
2. { } 을 사용함 
<pre>
const 객체 = {
  속성 1 이름: 속성 1 값,
   bc : 'hello',
  '2ca': 'hello1', // 앞에 숫자가 되있을때 ""붙임
  'c a': 'hello2', // 공백이 들어가있을때 ""붙임
  'c-a': 'hello3', // 특수문자가 들어가있을때 ""붙임}
</pre>
3. const bc = 'date';
   console.log(객체['bc']);
   console.log(객체[bc]); // 객체['date']와 같음
# 추가 삭제 #
추가 방법 : 객체.신규이름 = '생성';
delete 추가 방법 : 객체.신규이름 = '생성'; // 삭제됨

## (소)메서드 이해하기 ##
객체에 속성값으로 함수를 넣었을때
이 속성을 특별히 메서드(method)라고 합니다.
ex)console.log('hi') 콘솔 개체안에 log 메소드 = 브라우저가 기본제공

# (소)객체 간의 비교 (원시값과 차이점) #
<pre>
{} === {} // 객체 끼리 비교하면 무조건 false가 나옴 + (배열 함수도)
</pre>
<pre>
const a = { name: 'hoon' }; // 객체 리터럴
const array = [1, 2, a]; // 배열 리터럴
console.log(a === array[2]);
</pre>


## Math.random ##
0 <= Math.radnom() <1 이므로
 * 9 를하고 +1 를 해줌

## Math.floor ##
소수점을 버려준다
ex)Math.floor(Math.raddom() * 9 + 1);

## window.cryprto.getRandomValuese ##
좀더 랜덤을 정확하게 만들어준다.

## new Set ## 
중복을 없애줌 
new Set(input).size // length 로안씀
추가로 나중에 더 배우고 기입

## 정규편성식 ##
자세한 내용 검색 을 할수있음

## join ##
배열을 문자열로 바꾸는 함수
기본값은 , ex)[3,1,4,6]
join(':') => [3:1:4:6]

## spilt ##
문자열을 배열로 바꿈
'3146'.split('1') => ["3","46"]

## append / appendchild ##
append : 노드객체(Node Object) / DOMString(text) 를 사용할 수 있음
         메서드 return 값을 반환 X
         문자열은 createTextNode 붙일 필요 없음
         한번에 여러개를 붙일 수 있음
appendChild : 오직 노드 객체 에만 사용가능 !! 
              return 값을 반환 O

## indexOf 와 includes ##
indexOf: 원하는 값이 있다면 해당 인덱스를 알려주고 없으면 -1로 표시
         대신 자료형으로 똑같아야함 
includes : true, false 둘중 하나만 알려줌

## 노드 객체 ## 

## 매개 변수 ##

## forEach ##
const answer = [3,1,4,6];
const value = "3214";
                  3일때 0 / 1일때 1 / 4일때 2 
ex)const.forEach((요소, i) => {
    
}) // 배열에서 반복문 역할 
for 문 보다 성능은 안좋지만 배열에서 좋을때가 있음

## map ##
const array = [1, 2, 3, 4];
각각 2를 곱한 배열을 만들고싶으면
const result = [];
for (let i = 0; i<4; i++) {
  result.push(array[i] * 2);
};

array.map((element, i) => {
  return element * 2
})
: ※단 기존 배열은 안바뀜 !! 

## fill ##
arrry(9).file(0).map((el,idx) =>{
   return idx+1;
})

## 동기 ##
코드상의 순서는 위쪽에서 아래대로 
순서되로 진행되는 코드

## 비동기 코드 ##
코드상의 순서는 위쪽에서 아래쪽으로 진행되지 않는
것들을 비동기 라고한다

## 피셔 에이치 셔플 알고리즘 ##
랜덤 을 정하는 두가지 방법중하나 다른하나는 sort() 메서드
먼저 무작위 인덱스를 하나 뽑은 후, 그 해당되는 요소를 새로운 배열로 옮긴다.
이를 반복하다보면 새 배열에 무작위로 섞인 숫자들이 들어간다.

## while vs for 언제쓸까 ##
while : 1. 조건이 단순할때 2.몇번 반복해야될지 애매할때
for : 1. 조건이 복잡할때 2.몇번 반복해야하는지 명학할때 3. 추가조건이 들어갈때

## slice vs splice ##
둘다 배열을 다룰때 자주 사용되는 함수이지만.
slice() : 원본이 변하지않음 tip ) map
splice() : 원본을 수정 추가 삭제 가능

## sort ##
1. 배열을 정렬해준다
2. 원본을 변형시킴
3. array.slice().sort((a,b) => {a - b})
   이렇게 사용시 원본 변형 X
4. 문자열도 정렬가능
5. arr.slice().sort((a, b) => {a[0].chartCodeAt() - b[0].charCodeAt()}
6. arr.slice().sort((a, b) => {a.localeCompare(b)} // 정확히 사전순으로 하고싶을때 

## var 과 let 차이 ##
1. var 은 예전에 사용되던 "함수 스코프" 변수 이며 현재는 거의 사용되지 않는다.
2. let 은 "블록 스코프" 
3. 그렇기에 let을 사용할때 for 문에 let 변수 값이 고정 되므로 var 사용과 결과값이 다르게 나온다.

## JS background ##
1. background 를 바꿔줄때
2. backgroundSize 도 같이 기입해야 리셋을 막아줌

## 객체에서 점 vs [] ##
1. 점은 보통 "문자열" 을 뜻하고 arr.['문자열'] 
2. arr.[객체값] 으로 해석된다.

## setTimeout vs setInterval 차이점 ##
1. setTimeout 은 앞에 코드가 많으면 시간카운트가 점점 밀려날 수 있음
2. setInterval 은 timeout보다 좀더 정확하기에 정확한 시간을 구현할때는 setInterval 을 추천함

## setInterval vs setTimeout ##
1. setInterval(함수,밀리초) 은 clearInterval(아이디) 로
2. setTimeout(함수,밀리초) 은 clearTimeout(아이디) 

## classList ##
1. 코드.classList.contains('클래스');
2. 해당클래스가 들어가있으며 true 아니면 false
3. 사용법 
   1. 태그.classList.add('클래스'); // 추가 여러개가능
   2. 태그.classList.replace('기존클래스' , '수정클래스'); // 수정
   3. 태그.classList.remove('클래스'); // 제거 여러개가능

## new Date() ##
1. 시각을 직접 지정하고싶을때는 인수로 연, 월 , 일 , 시 , 분 , 초 
2. 단 !!! "월"은 0부터 시작함 ex) 1월은 0 , 5월은 4
3. 원하는 것만 구하기 new Date().getDate() 등등 
4. 예외 년도는 new Date().getFullYear() 

## 평균 구하기 ##
const average = 변수.reduce((a,c) => a + c) / 변수.length

## target 너무 어려움 찾아보자 ##
타겟과 화살표 함수에 매개 변수 인자 넣는게 너무 햇갈림 
왜 ??
함수 표기방법 setTimeout => 이 아니라 왜 setTimeout(Function 으로 적혀있을까)

## reduce ##
1. 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초기값 );
2. 배열.reduce ((누적값 , 현재값 ) => ( 다음 누적값 )); 
3. 더하기 곱하기를 여러번하거나 나중에 배열을 객체화 < = > 배열화 만들수있음
<pre>
배열.reduce((누적값 , 현잿값) => {
  return 새로운누적값;
}, 초깃값);
</pre>
4. 함수에서 반환되는 값은 다음번 누적값이되고 마지막으로 반환 되는 값이 reduce 메서드의 결과값이 됩니다.
5. 초깃값을 제공하지 않ㅇ면 배열의 첫 번째 요소가 초깃값이 됩니다.

## 이차원 배열 ##
배열안에 배열이있고
그 배열안에 값이있는
반복문안에 반복분이 나오는 경우도많음

## border-collapse ##
border-collapse: separate | collapse | initial | inherit ;
  separate : 표(table)의 테두리와 셀(td)의 테두리 사이에 간격을 둡니다.
  collapse : 표(table)의 테두리와 셀(td)의 테두리 사이의 간격을 없앱니다. 겹치는 부분은 한 줄로 나타냅니다.
  initial : 기본값으로 설정합니다.
  inherit : 부모 요소의 속성값을 상속받습니다.

## 구조분해할당 ?? ##
1. 객체구조분해할당
    <pre>
    const { body } = document;
    const body = document.body; 
    </pre>
    둘다 같은코드 객체안에 속성이 들어있음
    객체안에 속성이름과 변수이름이 같을때 사용할수있음
2. 배열구조분해할당

## 이벤트 버블링 vs 이벤트 캡쳐링 ?? ##
ex) 캡쳐링은 팝업외부를 클릭했을때 자주쓰임
1. 버블링(bubbling) : 한 요소에 이벤트가 발생하면 이 요소에 할당된 핸들러가 동작하고,
   이어서 부모 요소의 핸들러가 동작합니다. 가장 최상단의 조상요소를 만날때까지 이과정이 반복되면서
   각각 할당된 핸들러가 동작합니다.


## parentNode vs childern ##
각 태그에 붙이면 부모와 자식위치에 속하는 태그를 호출함

## 유사배열 ##
1. 배열 처럼 생겼지만 배열이 아닌것
   배열은 앞에 숫자만 있음 ex) (3) ['1', '2', '3'];
2. Array.from($table.유사배열) => 진짜배열로 바꿔준다

## 배열 반복문 forEach 라는데 구글링 필요 ##
 
## rowIndex 와 cellIndex ##
1. tr 태그는 몇 번째 줄인지를 알려주는 rowIndex
2. td 태그는 몇 번째 칸인지를 알려주는 cellIndex

## every , some , flat ##
1. every , some : 둘다 일차형 함수에만 사용가능 !
2. every : 는 모두가 true 여야 true / 하나라도 false면 false
3. some : 모두중 단 하나라도 true면 true
4. 배열.flat => (N-1)차형 배열로 바꿔준다 , 단 1차는 그대로 

## filter ##
지정한 특정 조건을 가진 값들만 반환해준다.
대신 , 일차원 배열에서만 사용가능

## 깊은복사 / 얕은 복사 / 참조 ##
1. 깊은복사 : const 변수 = JSON.parse(JSON.stringify[0]);
   * 전부다 참조관계가 끊킨다.
2. 얕은복사 : const 변수 = { ... 객체리터럴[0] } 객체를 얕은복사할때
   얕은복사 : const 변수 = [...arr]; 배열을 얕은복사할때 (제일 권장)
            : const 변수 = [].slice() 도가능
   * 겉 껍데기만 복사 되고 내부에 있는 객체는 참조
3. 참조 : const 다른변수 = 객체를담은변수
   * 연결되어있어서 하나만 바꿔도 다른것도 바뀌어짐

## JSON ##
1. JSON이란?
    JSON은 JavaScript Object Notation의 약자로, 브라우저와 서버사이에서 오고가는 데이터의 형식이다.
2. JSON.stringify : js값이나 객체를 json 문자열(String)로 변환
3. 간단한 객체는 JSON.parse(JSON.stringify(객체))를 사용해도 크게 문제는 없으나
   다만 성능도 느리고 함수나 Math, Date같은 객체를 복사할 수 없다는 단점이 있습니다.
   실무에서는 lodash 같은 라이브러리(다른사람들이 미리만들어둔 코드)를 사용하곤 합니다.

## this ##
1. 기본적으로는 this 는 window
2. 객체 안에 있는 this 는 자기 자신을 가리킴
3. 화살표 함수가아닌 function 일때 자기자신을 가리킨다.
4. 화살표 함수일경우 window로 가리킴
5. this 는 함수가 호출될때 정의가 된다. 

## window ##
1. window 는 최상위 객체 ex)document / console.log 등 앞에 window가 생략된것

## 생성자 함수 ##
1. new를 붙여주면 가상의 새로운객체가 생성된다. this가 window가 아닌 스스로를 가리킴
2. 생성자 함수의 시작은 항상 대문자로 시작한다.

## class  ?? ##
1. class 로 묶기좋을때
   1. 비슷한 객체를 공장 처럼 찍어내거나
   2. 객체간의 상호작용을 할때

## 팩토리 함수 ?? ##
1. 팩토리 함수는 (새로운)객체를 리턴하는 함수입니다. 이때 new 키워드가 없으면 팩토리 함수입니다.
2. 그러나 클래스나 생성자 함수는 아닙니다. 


## 객체지향 프로그래밍 ?? ##

## function vs 화살표 함수 ?? ##
1. 가장큰 용도의차이 (this) 화살표 함수를 사용하면 외부에 있는 this를 가져올 수 있음 

## return ##
1. 값을 저장해서 코드안에서 그 값이 필요할때 불러올수있음
2. return 하면 function 은 작동을 멈추고 결과 값을 return하고 끝나버림

## document 의 중요한점 ##
1. document 를 통해서 html 을 불러올수있다
  1. document.ElementById(샵필요없음);
2. 그것을 우리가 원하는대로 수정할수있음!
3. querySelector 사용할때 (".")을 붙여서 호출하는 이유는 css형식으로 불러오기때문
4. querySelector 여러개 있어도 맨첫번째거만 가져옴 

## classList ??? ##
1. classList 속성은 읽기 전용이지만 add () 및 remove () 메서드를 사용하여 수정할 수 있습니다
2. 한번에 여러 클래스들을 확인 할 수 있음
## localStorage ##
1. 다양한 데이터를 저장하는 방법중 가장 쉬운방법
2. localStroage.(setItem(키 밸류() : 저장소에 저장함 / getItem : 저장된걸 불러옴 / removeItem : 저장 되있는것을 삭제); 


## padStart() ##
1. string 에서 쓸수있는 function
2. padStart(원하는글자길이,붙이고싶은숫자) ex)1.padStart(2,"0") => 01
3. 숫자에 써야할때 Number / 숫자가 기존에있다면 String 을 붙여서 
## padEnd() ##
1. padStart() 동일 차이는 숫자가 뒤에붙음!!

## innerText , textContent, innerHTML ?? ##
1. 등 비슷한거 정리해야지

## json ?? ##

## navigator ?? ##