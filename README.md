### front_study ###
프론트엔드 종합 공부

- setInterval : 일정한 시간 간격으로 작업을 수행하기 위해서 사용합니다.

- clearInterval(), clearTimeout()이 실행중인 작업을 중지시키는 것은 아닙니다. 지정된 작업은 모두 실행되고 다음 작업 스케쥴이 중지 되는 것입니다.
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