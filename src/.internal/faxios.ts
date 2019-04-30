// import axios from 'axios'

import prototype from './prototype'

const faxios = (() => (url) => {
  // let {
  //   token: cancelToken,
  //   cancel
  // } = axios.CancelToken.source()
  let time = new Date().getTime()

  let _instance = {}
  let __config_proto = {
   __proto__ : prototype,
    listeners: {},
    configuration: {
      // cancelToken,
      // cancel,
      time
    }

  }

  _instance.__proto__ = __config_proto

  if (typeof url == 'string') {
    _instance.url(url)
  }

  return _instance
})()

module.exports = faxios
