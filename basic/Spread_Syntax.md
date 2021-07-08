# Spread syntax

- es2015에 추가된 문법
- 병합과 구조분해ㆍ할당 등에 활용

## Spread operator

- object merge

  ```js
  const personalData = {
    nickname: 'james',
    email: 'js@email.com',
  }

  const publicData = {
    age: 22,
  }

  const user = {
    ...personalData,
    ...publicData,
  }

  console.log(user)
  // { nickname: 'james', email: 'js@email.com', age: 22 }
  ```

- object rest(분해)

  ```js
  const user = {
    nickname: 'neo',
    age: 22,
    from: 'korea',
  }

  const { nickname, ...personalData } = user

  console.log(personalData) // { age: 22, from: 'korea' }
  ```

- array merge, rest

  ```js
  const arr1 = [1, 2, 3]
  const arr2 = [100, 200, 300]

  const merge = [...arr1, ...arr2]

  // [1, 2, 3, 100, 200, 300]
  ```

  ```js
  const arr = [1, 2, 3, 4, 5]

  const [first, second, ...rest] = arr

  console.log(first, second, rest) // 1, 2, [3, 4, 5]
  ```

- 삼항연산자 활용

  ```js
  const shouldOverrid = true

  const user3 = {
    // 직접적으로도 작성가능
    ...{
      email: 'abc@email.com',
      age: 22,
    },
    ...{
      nickname: 'neo',
    },
    ...(shouldOverrid ? { email: 'fffff@email.com' } : null),
  }

  /*
  
  true일때 { email: 'fffff@email.com', age: 22, nickname: 'neo' }
  false일때 { email: 'abc@email.com', age: 22, nickname: 'neo' }
  
  */
  ```

- 함수에서의 활용

  ```js
  function abc(first, second, ...rest) {
    console.log(first, second, rest)
  }

  abc(1, 1000, 3, 4, 5) // // 1, 1000, [3, 4, 5]
  ```

---

### 정리

- 덮어쓴다는 개념으로 생각해보자!!!  
  삼항연산자 예제로 잘 생각해보자

---
