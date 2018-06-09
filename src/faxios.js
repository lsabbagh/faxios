const fetch = require('./fetch')
const joinUrl = require('proper-url-join')
const axios = require('axios')


const __prototype = require('./__prototype')

const faxios = (() => (url) => {

  let {
    token: cancelToken,
    cancel
  } = axios.CancelToken.source()
  let time = new Date().getTime()

  let _instance = {}
  let __config_proto = {
    listeners: {},
    configuration: {
      cancelToken,
      cancel,
      time
    }

  }

  __config_proto.__proto__ = __prototype;
  _instance.__proto__ = __config_proto

  if(typeof url == 'string') {
    _instance.url(url)
  }

  return _instance
})()

module.exports = faxios
