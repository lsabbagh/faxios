module.exports = function(...args) {
  if (args.length == 1 && typeof args[0] == 'function') {
    this.key = args[0](this.configuration)
  } else {
    this.key = args.join('')
  }
  return this
}
