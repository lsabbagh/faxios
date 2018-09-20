module.exports = function(target, name, ...args) {
  // alias can be done
  if (this[target]) {

    // validate that it is not override a basic method
    if(this.hasOwnProperty(name) || !this[name]){
      this[name] = (..._args) => {
        this[target](...args, ..._args)
        return this
      }
    }
  }
  return this
}
