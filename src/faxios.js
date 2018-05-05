const fetch = require('./fetch')
const types = require('./types')
const joinUrl = require('proper-url-join')

const __prototype = require('./__prototype')

const faxios = (() => (url) => {
  let _instance = {}

  let __config_proto = {
    listeners: {},
    configuration: {}
  }

  __config_proto.__proto__ = __prototype;
  _instance.__proto__ = __config_proto

  if(typeof url == 'string') {
    _instance.url(url)
  }

  return _instance
})()

module.exports = faxios
