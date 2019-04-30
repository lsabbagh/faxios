import joinUrl from 'proper-url-join'
import plainObject from './.internal/plain-object'
import set from './.internal/set'

/**
 * @param  {...any} args The url parts to be combined
 * @returns {object} this
 */
function url(...args) {
  let {configuration: {url = ''}} = this
  args.forEach(input => {
    _setUrl.call(this, input, url)
  })
  return this
}

export default url

function _setUrl(input, url_) {
  if (!plainObject(input)) {
    set.call(this, 'url', joinUrl(url_, input))
    return
  }
  let keys = Object.keys(input)
  keys.forEach(key => {
    let value = input[key]
    set.call(this, 'url', url_.replace(key, value))
  })
}
