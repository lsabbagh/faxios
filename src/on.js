const statuses = require('./statuses')

module.exports = function(key, listener) {

  key = statuses.fix(key)

  let _ = this.listeners[key]
  if (!Array.isArray(_)){
    _ = []
  }
  _.push(listener)
  this.listeners[key] = _
  return this
}