module.exports = (...args) => {
  for(let i = 0; i < args.length; i++) {
    if(Object.prototype != args[i].__proto__) return false
  }
  return true
}
