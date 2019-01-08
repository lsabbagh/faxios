/**
 * @param {string} target the type of the alias @example: param, header, data...
 * @param {string} name the name of the key to be added @example: {first_name: 'Ji'}
 * @param {string} key the alias name @default: @name
 * @returns {object} self
 */
module.exports = function (target, name, key = name) {
  // alias can be done
  if (this[target]) {
    // validate that it is not overriding a basic method
    if (!this[name]) {
      this[name] = (..._args) => {
        this[target](key, ..._args)
        return this
      }
    }
  }
  return this
}
