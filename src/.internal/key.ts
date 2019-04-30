/**
 * 
 * @param  {...any} args 
 */
function key(...args) {
  if (args.length == 1 && typeof args[0] == 'function') {
    this.key = args[0](this.configuration)
  } else {
    this.key = args.join('')
  }
  return this
}

export default key
