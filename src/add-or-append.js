const plainObject = require('./plain-object')
const append = require('./append')
const set = require('./set')
const add = require('./add')

const addOrAppend = function(target, _class, ...args) {

  let currentValue = this.configuration[target] || {}

  if (args.length == 1) {

    let [input] = args, value

    if (input == _class) { value = append(_class, currentValue) }

    if (typeof input == 'string'
     || input instanceof _class
     || currentValue instanceof _class) {
      value = append(_class, currentValue, input)
    }

    if (value) {
      set.call(this, target, value)
    } else if (plainObject(input, currentValue)) {
      Object.assign(this.configuration[target], input)
    }

    return this
  }

  if (args.length > 1) {
    let [key, value] = args
    if (currentValue instanceof URLSearchParams
       || currentValue instanceof FormData) {
      if(Array.isArray(value)) {
        let _key = key + '[]'
        value.forEach(_ => {
          addOrAppend.call(this, target, _class, _key, _)
        })
      } else {
        currentValue.append(key, value)
      }
      return this
    }

    add.call(this, target, key, value)
  }
  return this
}


module.exports = addOrAppend
