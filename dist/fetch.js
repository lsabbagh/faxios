const axios = require('axios')

const fetch = (_, method = 'get', url = '', _config = {}, data) => {
  let config = { url, ..._.configuration, ..._config }
  if (data) config.data = data

  let info = { ...config, loading: true }
  notify(_.listeners.pre, info)
  notify(_.listeners.change, info)

  return axios
    .request(config)
    .then(response => {
      loading = false
      let info = { ...config, loading: true, response }
      notify(_.listeners.change, info)
      notify(_.listeners.success, info)
      notify(_.listeners.done, info)
      return response
    })
    .catch(error => {
      let info = { ...config, loading: false, error }
      notify(_.listeners.change, info)
      notify(_.listeners.error, info)
      notify(_.listeners.done, info)
      return Promise.reject(error)
    })
}
module.exports = fetch

const notify = (listeners, data) => {
  listeners.forEach(_listener => _listener(data))
}
