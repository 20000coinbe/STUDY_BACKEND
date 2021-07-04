## 1. Hoisting

- keyword : 선언, 초기화
-

#### ex1

```js
var x
console.log(x) // undifined
x = 1
```

#### ex2 : Refference Error

```js
console.log(x)
x = 1 // 선언하지 않았기 때문에
```

#### ex3 : 함수의 선언과 값의 초기화는 서로 다름

```js
console.log(test()) // 'testing', 함수는 초기화가 필요없음
function test() {
  return 'testing'
}
```

## Scope

-
- lexical scope : 안쪽에서 바깥쪽 변수에 접근할 수 있다

#### ex1 : 가장 가까운 스코프에서 일치하는 변수에 binding된다

```js
function a() {
  let x = 1

  function b() {
    console.log(x)
  }
}
```

#### ex2 : var는 block scope의 대상이 아니다

```js
var x = 1
if (true) {
  var x = 2
}
console.log(x) // 2
```

## Closure

- closure = function + environment
- environment란, 함수 자신을 둘러싼 접근할 수 있는 모든 scope

#### ex1

```js
function and(x) {
  return function print(y) {
    return x + ' and ' + y
  }
}

const saltAnd = and('salt')
console.log(saltAnd('pepper')) // salt and pepper
console.log(saltAnd('sugar')) // salt and sugar
```
