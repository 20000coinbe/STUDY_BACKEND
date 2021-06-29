## Event Loop

- 여러 쓰레드를 사용한다
- 이 중 JS코드가 실행되는 쓰레드를 '메인 쓰레드'라 부른다  
  (하나의 Node.js 프로세스에서 메인 쓰레드는 하나이며, 한 순간에 한 줄만 실행)
- file I/O, Network 등의 일들을 하는 '워커 쓰레드'는 여러개 있을 수 있다

## Call Stack

```js
function f3() {}
function f2() {
  f3()
}
function f1() {
  f2()
}

f1()

// 실행순서 : f3 -> f2 -> f1
```

- 빈 스택에 Callback들이 채워지고 리턴하면서 스택에서 빠져나간다
- **다음 CallBack을 처리하려면, CallStack의 콜백들이 모두 처리되 비어있어야한다**

## Callback Queue

- 앞으로 실행할 콜백(함수, 인자)들을 쌓아놓는다
- **Callback은 브라우저나 Node에 어떤 일이 생기면(Event) 메인스레드에게 이를 알려주기 위해 사용(타이머, 네트워크 작업 완료 등)**

```js
// 문제1
console.log('1')
setimeout(() => {
  console.log('2')
}, 0)
console.log('3')

// 실행순서 : 1 -> 3 -> 2
// 브라우저 or 노드에게 settimeout처리 후 내부의 console.log를 빈스택에 넣어 처리
```

```js
// 문제2 : Hey!가 몇번 실행될까?
setInterval(() => {
  console.log('Hey'!);
  while(true) {}
}, 1000)

// 1번
// EventLoop Block : 루프가 돌고있는 동안(while문) Call Stack이 절대 비지 않는다.
```
