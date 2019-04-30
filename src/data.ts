import addOrAppendTo from './.internal/add-or-append'

/**
 *
 * @param {...any} args The args
 * @returns {object} this
 *
 * @example
 * faxios()
 *   .baseURL('http://jsonplaceholder.typicode.com')
 *   .url('/posts')
 *
 *   .data('foo', 'bar')
 *
 *   .POST // => Promise
 *   .then(res => {})
 *   .catch(err => {});
 *
 * @example
 * faxios()
 *   .baseURL('http://jsonplaceholder.typicode.com')
 *   .url('/posts')
 *
 *   .data({
 *     key1: 'value1',
 *     key2: 'value2',
 *     key3: 'value3'
 *   })
 *
 *   .POST // => Promise
 *   .then(res => {})
 *   .catch(err => {});
 */
function data(...args) {
  let formdata = typeof FormData != 'undefined'
  addOrAppendTo.call(this, 'data', formdata && FormData, ...args)
  return this
}

export default data
