/**
 * 
 * @param  {...any} args objects to be check if plain of not
 * @returns {boolean} 
 * @example
 * 
 * plainObject({})
 *   // => true
 * 
 * plainObject(new Error())
 *   // => false
 * 
 * plainObject(new ForData())
 *   // => false
 */
function plainObject (...args) {
  for(let i = 0; i < args.length; i++) {
    if(!args[i] || Object.prototype != args[i].__proto__) return false
  }
  return true
}

export default plainObject
