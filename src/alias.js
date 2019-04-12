/**
 * @param {string} target the type of the alias
 * @param {string} name the name of the alias
 * @param {string} key the key to be set
 * @returns {object} this
 * @example
 *
 * faxios()
 *  .baseURL('http://jsonplaceholder.typicode.com')
 *
 *
 *  .alias('param', 'mySetter', 'foo')
 *  .mySetter('bar')
 *   // => .param('firstName', 'Wassim')
 *
 *
 *  .FETCH // => Promise
 *  .then(res => {})
 *  .catch(err => {});
 */
function alias(target, name, key = name) {
  // alias can be done
  let targetFunction = this[target]

  if (!targetFunction) {
    return this
  }

  // validate that it is not overriding a basic method
  this[name] = (...args) => {
    // calling the function
    targetFunction.call(this, key, ...args)
    return this
  }

  return this
}

export default alias
