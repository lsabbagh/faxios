import set from './.internal/set'

/**
 *
 * @param {string} path the path of the response
 * @returns {object} this
 */
function in_(path) {
  set.call(this, 'in', path)
  return this
}

export default in_
