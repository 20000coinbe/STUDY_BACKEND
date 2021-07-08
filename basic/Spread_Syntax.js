// Spread Operator
/* eslint-disable*/

// 1. object-merge
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

// 2. obejct-rest(구조분해)
const gammer = {
  nickname: 'neo',
  age: 22,
  from: 'korea',
}

const { nickname, ...restData } = gammer
console.log(restData) // { age: 22, from: 'korea' }

// 3. 배열의 구조분해할당

const arr1 = [1, 2, 3]
const arr2 = [100, 200, 300]

const merge = [...arr1, ...arr2]

console.log(merge) // [ 1, 2, 3, 100, 200, 300 ]

// 4. 삼항연산자

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

console.log(user3) // { email: 'fffff@email.com', age: 22, nickname: 'neo' }

// 5. 함수에서의 활용

function abc(first, second, ...rest) {
  console.log(first, second, rest)
}

abc(1, 1000, 3, 4, 5)
