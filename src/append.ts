import plainObject from './.internal/plain-object'

/**
 *
 * @param {FormData|URLSearchParams} _class the class
 * @param  {...any} args arguments
 * @returns {object} this
 */
function append(_class, ...args) {
  let result = new _class()
  args.forEach(argument => {
    if (plainObject(argument)) {
      let keys = Object.keys(argument)
      keys.forEach(key => {
        let value = argument[key]
        result.append(key, value)
      })
      return
    }
    let source
    if (argument instanceof _class) {
      source = [...argument.entries()]
    } else {
      source = [...(new _class(argument).entries())]
    }

    if (source) {
      source.forEach(([key, value]) => result.append(key, value))
    }
  })


  return result
}

export default append
