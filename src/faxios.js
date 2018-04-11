const fetch = require('./fetch')
const types = require('./types')
const joinUrl = require('proper-url-join')

const _aliases = require('./defaults/aliases')

const _middlewares = {}

const faxios = (() => () => {
  let _instance = {}
  let _ = {
    _instance,
    listeners: {
      before: [],
      change: [],
      success: [],
      error: [],
      complete: [],

      informational: [],
      redirection: [],
      clientError: [],
      serverError: []
    },
    configuration: {}
  }


  let set = (key, value) => {
    if (types.any.includes(key)) {
      _.configuration[key] = value
    }
    return _instance
  }

  let clear = (key, value) => {
    if (types.any.includes(key)) {
      delete _.configuration[key]
    }
    return _instance
  }

  let url = (...params) => {
    return set('url', joinUrl(_.configuration.url, ...params))
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

  let key = (...params) => {
    if (params.length == 1 && typeof params[0] == 'function') {
      _.key = params[0](_.configuration)
    } else {
      _.key = params.join('')
    }
    return _instance
  }

  let alias = (type, name, key) => {
    if (!_instance[name] && _instance[type]) {
      _instance[name] = value => {
        _instance[type](key || name, value)
        return _instance
      }
    }
    return _instance
  }

  let use = (middleware) => {
    if (typeof middleware == 'function')
      middleware(_instance, _.configuration, _.listeners)
    else if (_middlewares[middleware])
      _middlewares[middleware](_instance, _.configuration, _.listeners)
    return _instance
  }

  _instance = {
    ..._instance,
    set,
    clear,
    add,
    push,
    use,
    on,
    alias,
    key,

    request: config => fetch(_, 'request', undefined, config),

    get: (url, config) => fetch(_, 'get', url, config),
    delete: (url, config) => fetch(_, 'delete', url, config),
    head: (url, config) => fetch(_, 'head', url, config),
    options: (url, config) => fetch(_, 'options', url, config),

    post: (url, data, config) => fetch(_, 'post', url, config, data),
    put: (url, data, config) => fetch(_, 'put', url, config, data),
    patch: (url, data, config) => fetch(_, 'patch', url, config, data),

    url,
    mehod: method => set('method', method),
    baseURL: baseURL => set('baseURL', baseURL),

    header: (...params) => add('headers', ...params),

    param: (...params) => add('params', ...params),
    data: (...params) => add('data', ...params),


    before: (_listener) => on('before', _listener),
    change: (_listener) => on('change', _listener),
    success: (_listener) => on('success', _listener),
    error: (_listener) => on('error', _listener),
    complete: (_listener) => on('complete', _listener),
    
  }
  _instance.use(_aliases)
  return _instance
})()

faxios.middleware = (key, value) => {
  if (value) return _middlewares[key] = value
  return _middlewares[key]
}

module.exports = faxios
