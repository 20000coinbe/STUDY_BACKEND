// @ts-check

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
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {string | Object} body
 */

/**
 * @typedef Route
 * @property {RegExp} url
 * @property {'GET' | 'POST'} method
 * @property {() => Promise<APIResponse>} callback
 */

/** @type {Route[]} */
const routes = [
  {
    url: /^\/posts$/,
    method: 'GET',
    callback: async () => ({
      statusCode: 200,
      body: 'All posts',
    }),
  },
  {
    url: /^\/posts\/([a-zA-Z0-9-_])+$/, // TODO : Regex사용
    method: 'GET',
    callback: async () => ({
      statusCode: 200,
      body: {},
    }),
  },
  {
    url: /^\/posts$/,
    method: 'POST',
    callback: async () => ({
      statusCode: 200,
      body: {},
    }),
  },
]

module.exports = {
  routes,
}
