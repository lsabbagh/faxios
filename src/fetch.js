const axios = require('axios')

const log = require('./log')
const notify = require('./notify')
const get = require('lodash.get')


const delay = ms => new Promise(_ => setTimeout(_, ms));

const fetch = (_, method, url, _config, data) => {
  let {key} = _
  let config = Object.assign({}, _.configuration, _config)
  config.data = data || config.data
  config.url = url || config.url
  config.method = method || config.method || 'GET'

  _.configuration.uuid = Math.random()

  let requester = () => {
    let info = { key, ...config, loading: true}
    notify(_.listeners, info, 'before', 'change', 'info')

    return axios
    .request(config)
    .then(response => {
      if(config.in) {
        response = get(response, config.in)
      }
      let {status, data} = response
      let info = { key, ...config, loading: false, response}
      notify(_.listeners, info, 'change', 'success', 'complete', status)
      log(info, _.configuration.log)
      return response
    })
    .catch((error = {})=> {
      if(error.response && config.in) {
        error.response = get(error.response, config.in)
      }
      let info = { key, ...config, loading: false, error}
      let {response = {}} = error
      notify(_.listeners, info, 'change', 'error', 'complete', response.status)
      log(info, _.configuration.log)
      return Promise.reject(error)
    })
  }
  
  let uuid = _.configuration.uuid

  return delay(_.configuration.debounce || _.configuration.delay)
  .then(() => {
    let {debounce, uuid: _uuid} = _.configuration
    if(debounce && uuid != _uuid)
    return Promise.reject('debounced')
    return requester()
  })
}

module.exports = fetch
