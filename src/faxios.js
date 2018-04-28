const fetch = require('./fetch')
const types = require('./types')
const joinUrl = require('proper-url-join')

const aliases = require('./aliases')
const middlewares = require('./middlewares')
const builders = require('./builders')

const __prototype = require('./__prototype')

const faxios = (() => (url) => {
  let _instance = {}

  let __config_proto = {
    listeners: {},
    configuration: {}
  }

  __config_proto.__proto__ = __prototype;
  _instance.__proto__ = __config_proto

  _instance.use(aliases)
  if(typeof url == 'string') {
    _instance.url(url)
  }

  return _instance
})()

faxios.middleware = (key, value) => {
  if (value) return middlewares[key] = value
  return middlewares[key]
}

faxios.builder = (key, value) => {
  if (value) return builder[key] = value
  return builder[key]
}

module.exports = faxios
