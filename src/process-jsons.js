// @ts-check

const { log } = console

const fs = require('fs')

const rs = fs.createReadStream('local/jsons', {
  encoding: 'utf-8',
})

let totalSum = 0
let accumulatedJsonStr = ''

rs.on('data', (data) => {
  log('Event: data')

  if (typeof data !== 'string') {
    return
  }

  accumulatedJsonStr += data

  const lastNewlineIdx = accumulatedJsonStr.lastIndexOf('\n')

  const jsonLineStr = accumulatedJsonStr.substring(0, lastNewlineIdx)
  accumulatedJsonStr = accumulatedJsonStr.substring(lastNewlineIdx)

  totalSum += data
    .split('\n')
    .map((jsonLine) => {
      try {
        return JSON.parse(jsonLine)
      } catch {
        return undefined
      }
    })
    .filter((json) => json) // undefined를 막기위헤
    .map((json) => json.data)
    .reduce((sum, curr) => sum + curr, 0)
})

rs.on('end', () => {
  log('Event: end')
  log('totalSum', totalSum)
})
