/**
 *
 * @param {string} key the key
 * @param {function} value pusing to the array
 * @returns {object} this
 */
function push(key, value) {
  if (!this.configuration[key]) {
    this.configuration[key] = []
  }
  let _ = this.configuration[key]
  if (Array.isArray(_)) {
    _.push(value)
  }
  return this
}

export default push
