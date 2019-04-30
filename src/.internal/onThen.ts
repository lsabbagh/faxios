import get from 'lodash.get'

import notify from './notify'
import log from '../log'

function onThen({response, config, instance}) {
  let {status} = response
  let {key} = instance
  let resultResponse = config.in? get(response, config.in): response
  let info = {
     key,
    ...config,
    loading: false,
    response
  }
  notify(instance.listeners, info, 'change', 'success', 'complete', status)
  log(info, instance.configuration.log)
  return resultResponse
}

export default onThen

