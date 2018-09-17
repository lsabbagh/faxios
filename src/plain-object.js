module.exports = (...args) => {
  for(let i = 0; i < args.length; i++) {
    if(!args[i] || Object.prototype != args[i].__proto__) return false
  }
  return true
}
