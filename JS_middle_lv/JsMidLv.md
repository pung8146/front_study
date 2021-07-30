### 변수 , 호이스팅, TDZ(Temporal Dead Zon) ###
var 는 한번 선언된 변수를 다시 선언할 수 있다.

ex)1번
<pre>
var name = "Mike";
console.log(name);

var name = "Jane";
console.log(name)  
</pre>
= let : 은 성립불가능 !

ex)2번
<pre> 
console.log(name);
var name = "Mike"
</pre>
성립가능하는데 var 로 선언한 변수는 
실제 이동하는건 아니지만 var 가 최상단에 위치하는걸로 작동하는데(이를 호이스팅)이라함

# 변수의 생성과정 #
1. 선언 단계
2. 초기화 단계
3. 할당 단계

var는 1단계 선언과 초기화가 같이일어남 , 2단계 할당 단계
let 선언 , 초기화 , 할당이 따로 차례대로 일어남
const 는 1. 선언 + 초기화 + 할당이 동시에 일어난다

### 생성자 함수 ###
<pre>
let user = {
    name: 'Mike',
    age : 30,
}
</pre>
=> 객체리터를
객체리터럴을 여러개만들상황이 필요한대 이때 생성자 함수를 사용
<pre>
function User(name,age) {
    this.name = name;
    this.age = age;
}
첫글자는 대문자로
</pre>
let user1 = new User('Mike',30);
let user2 = new User('bob',24);
let user3 = new User('Jain',17);
// new 연산자를 사용해 호출

### 객체 메소드(Obeject methods) , 계산된 프로퍼티(Computed property) ###