// @ts-check

// CommonJS Module

const { path, paths, filename } = module

console.log({
  path,
  paths,
  filename,
})

const animalsA = require('./animal')
const animalsB = require('./animal')
const animalsC = require('./animal')

console.log(animalsA, animalsB, animalsC)

console.log(
  '동일한 모듈을 require하는 경우 같은 것들로 인식',
  animalsA === animalsB
)
