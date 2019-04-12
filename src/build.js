import _builders from './.internal/builders'

/**
 * The build function to be used with the builders
 *
 * @param  {...(string|function)} builders The builders
 * @example
 * faxios()
 * .baseURL('http://jsonplaceholder.typicode.com')
 * .alias('param', 'id', 'postId') // <-- setting the alias
 * .postId(1)
 *
 * .FETCH // => Promise
 * .then(res => {})
 * .catch(err => {});
 */

function build(...builders) {
  builders.forEach(builder => {
    if (typeof builder == 'function') {
      builder(this)
      return this
    }
    _builders.build(this, builder)
  })
  return this
}

export default build
