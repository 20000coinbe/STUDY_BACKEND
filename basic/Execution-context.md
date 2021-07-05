# 실행 컨텍스트(Execution-context)

- 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념  
  (_실행 가능한 코드가 실행되기 위해 필요한 환경_)
- 코드 실행을 위해 필요한 정보(**함수 선언, Scope, this, 변수**)

```js
var x = 'xxx'

function foo() {
  var y = 'yyy'

  function bar() {
    var z = 'zzz'
    console.log(x + y + z)
  }
  bar()
}

foo()
```

---

## 참조

https://poiemaweb.com/js-execution-context

---
