import statuses from './.internal/statuses'

/**
 *
 * @param {string} query query string or number or regex
 * @param {function} listener the callback function
 * @returns {object} this
 * @example
 * faxios()
 *   .baseURL('http://jsonplaceholder.typicode.com')
 *   .url('/posts')
 *
 *   .data('foo', 'bar')
 *
 *   .on('success', () => {....})
 *   .on(200, () => {....})
 *
 *
 *
 *   .on(404,  () => {....})
 *   .on('notFound',  () => {....})
 *
 *   .on(/200|400/, () => {....})
 *
 *   .on('Bad Request', () => {....})
 *
 *   .on(new RegExp('200|400'), () => {....})
 *   .on('2.*', () => {....}egex 2.*'))
 *
 *   .POST // => Promise
 *   .then(res => {})
 *   .catch(err => {});
 *
 */

function on(query, listener) {
  let query_ = statuses.fix(query)

  let _ = this.listeners[query_]
  if (!Array.isArray(_)) {
    _ = []
  }
  _.push(listener)
  this.listeners[query_] = _
  return this
}

export default on
