const addOrAppendTo = require('./add-or-append')

module.exports = function(...args) {
  addOrAppendTo.call(this, 'params', URLSearchParams, ...args)
  return this
}
