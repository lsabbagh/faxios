const joinUrl = require('proper-url-join')
const plainObject = require('./plain-object')
const set = require('./set')

module.exports = function(...args) {
  args.forEach(input => {
    if(!plainObject(input)) {
      set.call(this, 'url', joinUrl(this.configuration.url, input))
    } else {
      for(key in input) {
        let {url = ''} = this.configuration
        set.call(this, 'url', url.replace(key, _[key]))
      }
    }
  })
  return this
}
