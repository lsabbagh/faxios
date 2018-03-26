const fetch = require('./fetch')
const types = require('./types')

const faxios = (() => () => {
  let _instance = {}
  let _ = {
    _instance,
    listeners: {
      pre: [],
      change: [],
      success: [],
      error: [],
      done: []
    },
    configuration: {}
  }

  let set = (key, value) => {
    if (types.any.includes(key)) {
      _.configuration[key] = value
    }
    return _instance
  }

  let push = (key, value) => {
    if (types.array.includes(key) && typeof value == 'function') {
      if (!_.configuration[key]) _.configuration[key] = []
      _.configuration[key].push(value)
    }
    return _instance
  }

  let add = (target, ...params) => {
    if (types.object.includes(target)) {
      if (!_.configuration[target]) _.configuration[target] = {}
      if (params.length == 2) {
        let [key, value] = params
        _.configuration[target][key] = value
      } else if (params.length == 1) {
        let [_params] = params
        _.configuration[target] = {
          ..._.configuration[target],
          ..._params
        }
      }
    }
    return _instance
  }

  let on = (name, _listener) => {
    if (_.listeners[name] && typeof _listener == 'function') {
      _.listeners[name].push(_listener)
    }
    return _instance
  }

  _instance = {
    ..._instance,
    set,
    add,
    push,
    on,

    request: config => fetch(_, 'request', undefined, config),

    get: (url, config) => fetch(_, 'get', url, config),
    delete: (url, config) => fetch(_, 'delete', url, config),
    head: (url, config) => fetch(_, 'head', url, config),
    options: (url, config) => fetch(_, 'options', url, config),

    post: (url, data, config) => fetch(_, 'post', url, config, data),
    put: (url, data, config) => fetch(_, 'put', url, config, data),
    patch: (url, data, config) => fetch(_, 'patch', url, config, data),

    method: method => set('method', method),
    url: url => set('url', url),
    mehod: method => set('method', method),
    baseURL: baseURL => set('baseURL', baseURL),

    header: (...params) => add('headers', ...params),
    param: (...params) => add('params', ...params),
    data: (...params) => add('data', ...params),


    pre: (_listener) => on('pre', _listener),
    change: (_listener) => on('change', _listener),
    success: (_listener) => on('success', _listener),
    error: (_listener) => on('error', _listener),
    done: (_listener) => on('done', _listener),
  }
  return _instance
})()

module.exports = faxios
window.faxios = faxios
