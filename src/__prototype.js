const fetch = require('./fetch')
const types = require('./types')
const joinUrl = require('proper-url-join')
const middlewares = require('./middlewares')

function set(key, value) {
  if (types.any.includes(key)) {
    this.configuration[key] = value
  }
  return this
}

function clear(key, value) {
  if (types.any.includes(key)) {
    delete this.configuration[key]
  }
  return this
}

function url(...params) {
  set.call(this, 'url', joinUrl(this.configuration.url, ...params))
  return this
}

function push(key, value) {
  if (types.array.includes(key) && typeof value == 'function') {
    if (!this.configuration[key]) this.configuration[key] = []
    this.configuration[key].push(value)
  }
  return this
}

function add(target, ...params) {
  if (types.object.includes(target)) {
    if (!this.configuration[target]) this.configuration[target] = {}
    if (params.length == 2) {
      let [key, value] = params
      this.configuration[target][key] = value
    } else if (params.length == 1) {
      let [_params] = params
      this.configuration[target] = {
        ...this.configuration[target],
        ..._params
      }
    }
  }
  return this
}

function on(key, listener) {
  if (typeof listener == 'function') {
    if (!Array.isArray(this.listeners[key])) this.listeners[key] = []
    this.listeners[key].push(listener)
  }
  return this
}

let key = (...params) => {
  if (params.length == 1 && typeof params[0] == 'function') {
    this.key = params[0](this.configuration)
  } else {
    this.key = params.join('')
  }
  return this
}

function alias(type, name, key) {
  if (!this[name] && this[type]) {
    this[name] = value => {
      this[type](key || name, value)
      return this
    }
  }
  return this
}

function use(middleware) {
  if (typeof middleware == 'function')
    middleware(this)
  else if (middlewares[middleware])
    middlewares[middleware](this)
  return this
}


module.exports = {
  url,
  set,
  clear,
  add,
  push,
  use,
  on,
  alias,
  key,

  request: function (config) {
    return fetch(this, 'request', undefined, config)
  },

  get: function (url, config) {
    return fetch(this, 'get', url, config)
  },
  delete: function (url, config) {
    return fetch(this, 'delete', url, config)
  },
  head: function (url, config) {
    return fetch(this, 'head', url, config)
  },
  options: function (url, config) {
    return fetch(this, 'options', url, config)
  },

  post: function (url, data, config) {
    return fetch(this, 'post', url, config, data)
  },
  put: function (url, data, config) {
    return fetch(this, 'put', url, config, data)
  },
  patch: function (url, data, config) {
    return fetch(this, 'patch', url, config, data)
  },

  method: function (method) {
    return set.call(this, 'method', method)
  },
  baseURL: function (baseURL) {
    return set.call(this, 'baseURL', baseURL)
  },

  header: function (...params) {
    return add.call(this, 'headers', ...params)
  },

  param: function (...params) {
    return add.call(this, 'params', ...params)
  },
  data: function (...params) {
    return add.call(this, 'data', ...params)
  },


  before: function (_listener) {
    return on.call(this, 'before', _listener)
  },
  change: function (_listener) {
    return on.call(this, 'change', _listener)
  },
  success: function (_listener) {
    return on.call(this, 'success', _listener)
  },
  error: function (_listener) {
    return on.call(this, 'error', _listener)
  },
  complete: function (_listener) {
    return on.call(this, 'complete', _listener)
  },
}