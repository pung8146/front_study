## 1000 번  A + B ? ##

JAVASCRIPT 로 값을 입력받기 위해서는 
모듈을 사용한다고 한다.

JS 에서 사용하기위해 모듈을 사용함 const fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' '); 

->?1 입력받는다 라는것은
사용자로부터 데이터의 입력을 받는다는것을 의미한다.
->?2 모듈 :


### fs ###
fs모듈 : 파일 시스템에 접근하는 모듈.
         즉, 파일을 생성하거나 삭제하거나 읽고 쓸수있습니다.

### parseInt ###
parseInt() - 문자열을 정수로 바꾸는 함수입니다.

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