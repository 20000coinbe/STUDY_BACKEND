# Scope(유효범위)

## 1. 함수레벨스코프(function-level-scope)

- 함수코드블록 내에서 선언된 변수는 함수 내부에서만 유효하다(_var_)

```js
// 예제

var a = 1(function b() {
  var a = 0
  console.log(a) // 0
})()

console.log(a) // 1
```

- 만약 함수 내부에 함수가 존재할 경우, 내부의 함수는 상위 함수에 접근할 수 있다  
  (_중첩 스코프는 가장 인접한 지역을 우선 참조_)

```js
var x = 'a'(function outer() {
  var x = 'b'
  console.log(x) // b

  function inner() {
    // var x = 'c', 가장 가까운 것을 참조
    console.log(x) // b
  }
})()

console.log(x) // a
```

## 2. 렉시컬 스코프(Lexical scope)

- 함수를 **어디서 선언하였는지에 따라 결정**된다
- _자바스크립트는 Lexical 스코프를 따른다_

```js
var x = 1

function a() {
  var x = 10
  b()
}

function b() {
  // 전역에서 선언되었다, 전역 스코프이다
  console.log(x)
}

a() // 1
b() // 1
```

## 3. 전역변수 사용을 최소화하는 방법

### 3-1. 객체를 활용

```js
var MYAPP = {}

MYAPP.student = {
  name: 'NEO',
  gender: 'male',
}

console.log(MYAPP.student.name)
```

### 3-2. 즉시실행함수(IIFE)를 활용

- 즉시 실행되고 그 후 전역에서 바로 사라진다(_라이브러리등에서 자주사용_)

```js
;(function () {
  var MYAPP = {}

  MYAPP.student = {
    name: 'neo',
    age: 20,
  }

  console.log(MYAPP.student.name)
})()

console.log(MYAPP.student.name)
```

---

참조  
Scope : https://poiemaweb.com/js-scope

---
