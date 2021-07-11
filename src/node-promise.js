// @ts-check

const fs = require('fs')

fs.readFile('../.gitignore', 'utf-8', (error, value) => {
  console.log(value)

  // .vscode/
  // node_modules
  // package-lock.json
})

// promise로 만들어보기
/** @param {string} fileName */
function readFileInPromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (error, value) => {
      if (error) {
        reject(error)
      }
      resolve(value)
    })
  })
}

readFileInPromise('.gitignore').then((value) => {
  console.log(value)
})
