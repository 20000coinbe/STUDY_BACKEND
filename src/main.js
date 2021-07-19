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
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
const posts = [
  {
    id: 'my_first_post',
    title: 'My first porst',
    content: 'Hello',
  },
  {
    id: 'my_second_post',
    title: 'My second porst',
    content: 'See ya',
  },
]

/**
 * POST
 *
 * GET /posts
 * GET /posts/:id
 * POST /posts/
 */

const server = http.createServer((req, res) => {
  const POSTS_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_])+$/
  const postIdRegexResult =
    (req.url && POSTS_ID_REGEX.exec(req.url)) || undefined

  if (req.url === '/posts' && req.method === 'GET') {
    const result = {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
      })),
      totalCount: posts.length,
    }

    res.statusCode = 200
    res.end('List of posts')
  } else if (postIdRegexResult) {
    // GET posts/:id
    const postId = postIdRegexResult[1]
    const post = posts.find((_post) => _post.id === postId)

    if (post) {
      res.setHeader('Content-Type', 'application/json; encoding=utf-8')
      res.statusCode = 200
      res.end(JSON.stringify(post))
    } else {
      res.statusCode = 404
      res.end('Post not found')
    }
  } else if (req.url === '/posts' && req.method === 'POST') {
    res.statusCode = 200
    res.end('Creating post')
  } else {
    res.statusCode = 404
    res.end('Not Found')
  }
  res.statusCode = 200
  res.end('HELLO')
})

const PORT = 4000

server.listen(PORT, () => {
  console.log(`The Server is listening at port: ${PORT}`)
})
