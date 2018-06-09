const addOrAppendTo = require('./add-or-append')
module.exports= function(...args) {
  addOrAppendTo.call(this, 'data', FormData, ...args)
  return this
}
