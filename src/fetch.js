const axios = require('axios')

const fetch = (_, method = 'get', url = '', _config = {}, data) => {
  let config = { url, method, ..._.configuration, ..._config }
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
  let queries = Object.keys(listeners) 
  events.forEach(event => {
    if(!event) return
    queries.forEach(query => {
      if(!query) return
      
      if(event == query ||
         (typeof event == 'string' && event.match(query)) ||
         (typeof query == 'string' && query.match(event)) ||
         (event +'').match(query) ||
         (event +'').match(query + '')
        ) {
           listeners[query].forEach(listener => listener(data))
      }
    })
  })
}

module.exports = fetch
