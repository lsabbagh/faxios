import set from './.internal/set'

/**
 *
 * @param {number} duration the duration debounce time
 * @returns {object} this
 */
function debounce(duration) {
  set.call(this, 'debounce', duration)
  return this
}

export default debounce
