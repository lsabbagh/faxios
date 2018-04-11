const axios = require('axios')

const fetch = (_, method = 'get', url = '', _config = {}, data) => {
  let config = { url, ..._.configuration, ..._config }
  let {key} = _
  if (data) config.data = data

  let info = { key, ...config, loading: true}
  notify(_.listeners.before, info)
  notify(_.listeners.change, info)

  return axios
    .request(config)
    .then(response => {
      let info = { key, ...config, loading: false, response}
      notify(_.listeners.change, info)
      notify(_.listeners.success, info)
      notify(_.listeners.complete, info)
      return response
    })
    .catch(error => {
      let info = { key, ...config, loading: false, error}
      notify(_.listeners.change, info)
      notify(_.listeners.error, info)
      notify(_.listeners.complete, info)
      return Promise.reject(error)
    })
}


const notify = (listeners, data) => {
  listeners.forEach(_listener => _listener(data))
}

module.exports = fetch
