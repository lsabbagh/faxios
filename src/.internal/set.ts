/**
 * 
 * @param {any} key the key
 * @param {any} value the value
 * @returns {object} this
 */
function set(key, value) {
  this.configuration[key] = value
  return this
}

export default set
