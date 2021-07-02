## 1. Event Loop

- 여러 쓰레드를 사용한다
- 이 중 JS코드가 실행되는 쓰레드를 '메인 쓰레드'라 부른다  
  (하나의 Node.js 프로세스에서 메인 쓰레드는 하나이며, 한 순간에 한 줄만 실행)
- file I/O, Network 등의 일들을 하는 '워커 쓰레드'는 여러개 있을 수 있다

## 2. Call Stack

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

## 3. Callback Queue

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
// EventLoop Block : 루프가 돌고있는 동안(while문) Call Stack이 절대 비지 않는다. callbackQueue에서 콜백을 꺼낼 수 가 없기 때문에, setInterval이 아무리 콜백을 쌓아도 메인 스레드에서 실행될 수가 없다
```

### Non-Blocking I/O & offloading

- offloading  
  브라우저나 Node에서나 Web API 혹은 Node API의 동작이 끝나면 callback queue에 등록, 브라우저나 Node가 요청받은 일을 하고 있는 동안 메인 스레드와 이벤트 루프는 영향을 받지 않고 계속 실행된다

```js
// Node에게 파일을 읽어달라고 요청하고, 워커 스레드에서 파일을 읽기 시작한다
fs.readFile(fileName, (err, data) => {
  // Node가 파일을 다 읽고 나면
  // 1. callback queue에 이함수에 err, data 인자를 채워서 넣고
  // 2. callback queue에서 꺼내질 때 이 부분이 실행된다
})

someTake()
// readFile의 호출이 끝난 직후 바로 이 함수를 실행하게 된다
// 이는 여전히 같은 콜백을 처리하는 중이기 때문이다
```
