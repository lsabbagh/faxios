import plainObject from './plain-object'

function add(target, ...args) {
  if (!this.configuration[target]) {
    this.configuration[target] = {}
  }

  let [key, value] = args

  let _ = this.configuration[target]

  if (plainObject(_)) {
    this.configuration[target][key] = value
    return this
  }

  if (typeof _.append == 'function') {
    _.append(key, value)
  }

  return this
}

export default add
