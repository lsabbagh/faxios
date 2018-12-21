const addOrAppendTo = require('./add-or-append')
module.exports= function(...args) {
  let formdata = typeof FormData != 'undefined'
  addOrAppendTo.call(this, 'data', formdata && FormData, ...args)
  return this
}
