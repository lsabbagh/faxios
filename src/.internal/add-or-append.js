import plainObject from './plain-object'
import append from '../append'
import set from './set'
import add from './add'

function addOrAppend(target, _class, ...args) {
  let currentValue = this.configuration[target] || {}

  if (args.length == 1) {
    let [input] = args; let value

    if (input == _class) {
      value = append(_class, currentValue)
    }

    if (typeof input == 'string'
     || _class && (
       input instanceof _class || currentValue instanceof _class)) {
      value = append(_class, currentValue, input)
    }

    if (value) {
      set.call(this, target, value)
    } else if (plainObject(input, currentValue)) {
      if (!this.configuration[target]) {
        this.configuration[target] = {}
      }
      Object.assign(this.configuration[target], input)
    }

    return this
  }

  if (args.length > 1) {
    let [key, value] = args

    let urlsearchparams = typeof URLSearchParams != 'undefined'
    let formdata = typeof FormData != 'undefined'

    if ((urlsearchparams && currentValue instanceof URLSearchParams)
       || (formdata && currentValue instanceof FormData)) {
      if (Array.isArray(value)) {
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


export default addOrAppend
