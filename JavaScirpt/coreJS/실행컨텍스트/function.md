# 함수 선언문과 표현식

```js
// 함수 선언문
function a() {}
a(); // 실행 OK

// 함수 표현식 (익명)
var b = function () {};
b(); // 실행 OK

// 함수 표현식 (기명)
var c = function d() {};
c(); // 실행 OK
d(); // 에러!!
```

함수 d의 경우 함수 c 내부에서만 호출 가능한데 보통 재귀적으로 함수를 실행할때 사용가능한데
함수 c로도 재귀적으로 호출가능한데 굳이 함수 d로 호출할 필요 없음

# 호이스팅에서 함수 선언문과 표현식의 차이

호이스팅 전 코드

```js
sum(1, 2);
multiply(1, 2);

function sum(a, b) {
  return a + b;
}

var multiply = function (a, b) {
  return a * b;
};
```

호이스팅 후 코드

- 아래코드는 실제로 JS엔진이 동작하는 방식이 아닌 이해를 돕기위한 코드

```js
var sum = function sum(a, b) {
  return a + b;
};
var multiply;

sum(1, 2);
multiply(1, 2); // 에러!!

multiply = function (a, b) {
  return a * b;
};
```

함수 선언문은 전체를 호이스팅한 반면
표현식은 변수 선언부만 호이스팅함
따라서 multiply(1, 2) 에서 `multiply is not a function` 에러가 발생하고 런타임 종료된다

선언 후 호출할 수 있는 `함수 표현식`으로 작성을 해야 함수 선언문에서 에러를 나타내지 않고 의도치 않은 작동을 하는 현상을 방지할 수 있다.