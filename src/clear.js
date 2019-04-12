/**
 *
 * @param {'param'|'data'|'header'} [target] The target
 * @param {string} [key] The name of the property
 * @returns {object} self this
 */
function clear(target, key) {
  if (!target) {
    return this
  }
  if (!key) {
    delete this.configuration[target]
  } else {
    delete this.configuration[target][key]
  }
  return this
}

export default clear
