// Closure(클로져) : 함수와 그 함수가 선언됬을 때, 렉시컬 환경과의 조합

function outerFunc() {
  const x = 10
  const innerFunc = function () {
    console.log(x)
  }
  innerFunc()
}

outerFunc()
