const addOrAppendTo = require('./add-or-append')

module.exports = function(...args) {
  let urlsearchparams = typeof URLSearchParams != 'undefined'
  addOrAppendTo.call(this, 'params',urlsearchparams && URLSearchParams, ...args)
  return this
}
