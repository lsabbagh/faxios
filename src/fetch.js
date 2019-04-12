import axios from 'axios'
import notify from './.internal/notify'
import onThen from './.internal/onThen'
import onCatch from './.internal/onCatch'

const delay = ms => new Promise(_ => setTimeout(_, ms))

const fetch = (instance, axiosMethod = 'GET', axiosURL, axiosConfig, axiosData) => {
  let {configuration} = instance
  let config = {
    url: axiosURL,
    method: axiosMethod,
    ...configuration,
    ...axiosConfig,
    data: {
      ...axiosData,
      ...configuration.data
    }
  }

  if (!Object.keys(config.data).length) {
    delete config.data
  }

  let uuid = Date.now() + Math.random()

  configuration.uuid = uuid

  return delay(configuration.debounce || configuration.delay)
    .then(() => {
      if (uuid != configuration.uuid) {
        return Promise.reject('debounced')
      }

      let info = {
        ...config,
        key: instance.key,
        loading: true
      }


      notify(instance.listeners, info, 'before', 'change', 'info')

      return axios
        .request(config)
        .then(response => onThen({
          response,
          config,
          instance
        }))
        .catch(error => onCatch({
          error,
          config,
          instance
        }))
    })
}

export default fetch
