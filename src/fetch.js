const axios = require('axios')

const log = require('./log')
const notify = require('./notify')


const fetch = (_, method, url, _config, data) => {
  let {key} = _
  let config = Object.assign({}, _.configuration, _config)
  config.data = data || config.data
  config.url = url || config.url
  config.method = method || config.method

  let info = { key, ...config, loading: true}
  notify(_.listeners, info, 'before', 'change', 'info')


  let requester = axios
  .request(config)
  .then(response => {
    let {status, data} = response
    let info = { key, ...config, loading: false, response}
    notify(_.listeners, info, 'change', 'success', 'complete', status)
    log(info, _.configuration.log)
    return response
  })
  .catch((error = {})=> {
    let info = { key, ...config, loading: false, error}
    let {response = {}} = error
    notify(_.listeners, info, 'change', 'error', 'complete', response.status)
    log(info, _.configuration.log)
    return Promise.reject(error)
  })
  return requester
}

module.exports = fetch
