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