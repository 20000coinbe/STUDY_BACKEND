/**
 * Promise를 사용하지 않을 경우
 *  - 상위 Scope에 접근이 쉽다(Error 가능성 UP)
 */

setTimeout(() => {
  const value1 = Math.random()
  console.log('value1 :', value1)

  setTimeout(() => {
    const value2 = Math.random()
    console.log('value2 :', value2)

    setTimeout(() => {
      const value3 = Math.random()
      console.log('value3 :', value3)

      setTimeout(() => {
        // value1, value2, value3가 전부 접근가능한 상태
        const value4 = Math.random()
        console.log('value4 :', value4)
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)
