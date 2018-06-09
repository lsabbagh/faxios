module.exports = function(key, listener) {
  let _ = this.listeners[key]
  if (!Array.isArray(_)){
    _ = []
  }
  _.push(listener)
  this.listeners[key] = _
  return this
}
