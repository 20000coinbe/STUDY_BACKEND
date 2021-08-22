// @ts-check

const { log } = console

const fs = require('fs')

const rs = fs.createReadStream('local/big-file', {
  encoding: 'utf-8',
  highWaterMark: 65536 * 2,
})

/** @type {Object.<string, number>} */
const numBlocksPerCharacter = {
  a: 0,
  b: 0,
}

/** @type {string | undefined} */
let prevCharacter

rs.on('data', (data) => {
  if (typeof data !== 'string') {
    return
  }

  for (let i = 0; i < data.length; i += 1) {
    if (data[i] !== prevCharacter) {
      const newCharacter = data[i] // 'a' or 'b'

      if (!newCharacter) {
        /* eslint-disable-next-line no-continue */
        continue
      }

      prevCharacter = newCharacter
      numBlocksPerCharacter[newCharacter] += 1
    }
  }
})

rs.on('end', () => {
  log('Event: end')
  log('numBlocks Counter: ', numBlocksPerCharacter)
})
