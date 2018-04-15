const axios = require('axios')

const fetch = (_, method = 'get', url = '', _config = {}, data) => {
  let config = { url, ..._.configuration, ..._config }
  let {key} = _
  if (data) config.data = data

  let info = { key, ...config, loading: true}
  notify(_.listeners, info, 'before', 'info')

  return axios
    .request(config)
    .then(response => {
      let info = { key, ...config, loading: false, response}
      let {status} = response
      notify(_.listeners, info, 'change', 'success', 'complete', status)
      return response
    })
    .catch((error = {})=> {
      let info = { key, ...config, loading: false, error}
      let {response = {}} = error
      notify(_.listeners, info, 'change', 'error', 'complete', response.status)
      return Promise.reject(error)
    })
}


const notify = (listeners, data, ...events) => {
  let keys = Object.keys(listeners) 
  events.forEach(event => {
    if(!event) return
    event = event + ''
    keys.forEach(key => {
      if(!key) return
      key = key + ''
      if(event == key || event.match(key)) {
        listeners[key].forEach(listener => listener(data))
      }
    })
  })
}

module.exports = fetch
