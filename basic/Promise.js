// @ts-check

/* eslint-disable */

new Promise((resolve, reject) => {
  console.log('Inside promise')
  resolve('First resolve')
}).then((value) => {
  console.log('Inside first then')
  console.log('value', value)
})

new Promise((resolve, reject) => {
  console.log('Before Timeout')
  setTimeout(() => {
    resolve(Math.random())
    console.log('After resolve')
  }, 1000)
})
  .then((value) => {
    console.log('value', value)
  })
  .then(() => {
    console.log('then2')
  })

console.log()

// 비교

function returnPromiseForTimeout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random())
    }, 1000)
  })
}

returnPromiseForTimeout()
  .then((value) => {
    console.log(value)
    return returnPromiseForTimeout()
  })
  .then((value) => {
    console.log(value)
    return returnPromiseForTimeout()
  })
  .then((value) => {
    console.log(value)
    return returnPromiseForTimeout()
  })
  .then((value) => {
    console.log(value)
    return returnPromiseForTimeout()
  })

returnPromiseForTimeout()
