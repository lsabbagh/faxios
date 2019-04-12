import get from 'lodash.get'

import log from '../log'

import notify from './notify'

function onCatch({error = {}, config, instance}) {
  if (error.response && config.in) {
    error.response = get(error.response, config.in)
  }
  let {key} = instance
  let info = { key, ...config, loading: false, error}
  let {response = {}} = error
  notify(instance.listeners, info, 'change', 'error', 'complete', response.status)
  log(info, instance.configuration.log)
  return Promise.reject(error)
}

export default onCatch