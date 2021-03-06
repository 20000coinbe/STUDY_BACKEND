// @ts-check

// 프레임워크 없이 웹서버 만들어보기

/**
 * 블로그 포스팅 서비스
 *  - 로컬 파일을 DB로 활용(JSON)
 *  - 인증 로직 제외
 *  - RESTful API 사용
 */

const http = require('http')
const { routes } = require('./api')

/**
 * POST
 *
 * GET /posts
 * GET /posts/:id
 * POST /posts/
 */

const server = http.createServer((req, res) => {
  async function main() {
    const route = routes.find(
      (_route) =>
        req.url &&
        req.method &&
        _route.url.test(req.url) &&
        _route.method === req.method
    )

    if (!req.url || !route) {
      res.statusCode = 404
      res.end('Not Found')
      return
    }

    const regexResult = route.url.exec(req.url)

    if (!regexResult) {
      res.statusCode = 404
      res.end('Not Found')
      return
    }

<<<<<<< HEAD
    /** @type {Object.<string, *> | undefined} */
=======
    /** @type {string | undefined} */
>>>>>>> a8832fcd8383d1c51e93c81637e46a7f00480943
    const reqBody =
      (req.headers['content-type'] === 'application/json' &&
        (await new Promise((resolve, reject) => {
          req.setEncoding('utf-8')
          req.on('data', (data) => {
            try {
              resolve(JSON.parse(data))
            } catch {
              reject(new Error('Ill-formed json'))
            }
          })
        }))) ||
      undefined

    const result = await route.callback(regexResult, reqBody)
    res.statusCode = result.statusCode

    if (typeof result.body === 'string') {
      res.end(result.body)
    } else {
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.end(JSON.stringify(result.body))
    }
  }

  main()
})

const PORT = 4000

server.listen(PORT, () => {
  console.log(`The Server is listening at port: ${PORT}`)
})
