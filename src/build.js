const builders = require('./builders')

module.exports = function(builder) {
  if (typeof builder == 'function') {
    builder(this)
    return this
  }

  let name = builder
  builders.build(this, builder)
  return this
}
