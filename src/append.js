const plainObject = require('./plain-object')

module.exports = (_class, ...args) => {
  let result = new _class()
  args.forEach(_ => {
    if (plainObject(_)) {
      for(key in _) {
        result.append(key, _[key])
      }
      return
    }
    let source
    if(_ instanceof _class) {
      source = [..._.entries()]
    } else {
      source = [...(new _class(_).entries())]
    }

    if(source) {
      source.forEach(([key, value]) => result.append(key, value))
    }
  })


  return result
}
