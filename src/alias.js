module.exports = function(target, name, key = name) {
  // alias can be done
  if (this[target]) {

    // validate that it is not overriding a basic method
    if(!this[name]) {
      this[name] = (..._args) => {
        this[target](key, ..._args)
        return this
      }
    }
  }
  return this
}