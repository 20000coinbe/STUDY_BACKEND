// @ts-check

// 스트림으로 큰 파일 처리하기

const fs = require('fs')

const ws = fs.createWriteStream('local/big-file')

ws.write('Hello, world!')
