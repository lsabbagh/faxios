const fetch = require('./fetch')
const types = require('./types')
const joinUrl = require('proper-url-join')

const _aliases = require('./defaults/aliases')

const middlewares = require('./middlewares')

const __prototype = require('./__prototype')

const faxios = (() => () => {
  let _instance = {}

  let __config_proto = {
    listeners: {},
    configuration: {}
  }

  __config_proto.__proto__ = __prototype;
  _instance.__proto__ = __config_proto

  _instance.use(_aliases)
  return _instance
})()

faxios.middleware = (key, value) => {
  if (value) return middlewares[key] = value
  return middlewares[key]
}

module.exports = faxios
