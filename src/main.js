// @ts-check

// 프레임워크 없이 웹서버 만들어보기

/**
 * 블로그 포스팅 서비스
 *  - 로컬 파일을 DB로 활용(JSON)
 *  - 인증 로직 제외
 *  - RESTful API 사용
 */

const http = require('http')

/**
 * POST
 *
 * GET /posts
 * GET /posts/:id
 * POST /posts/
 */

const server = http.createServer((req, res) => {
  console.log(req.url)
  res.statusCode = 200
  res.end('HELLO')
})

const PORT = 4000

server.listen(PORT, () => {
  console.log(`The Server is listening at port: ${PORT}`)
})
