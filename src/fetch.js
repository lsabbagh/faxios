const axios = require('axios')

const fetch = (_, method = 'get', url = '', config = {}, data = {}) => {
  let _config = { url, ..._.configuration, ...config }
  console.log(_config);
  //@TODO: set config here
  //...

  return axios
    .request(_config)
    .then(response => {
      console.log('---------response:')
    })
    .catch(error => {
      console.log('---------error:')
      // if safe
      return error
      // else if not safe
      return Promise.reject(error)
    })
}
module.exports = fetch
