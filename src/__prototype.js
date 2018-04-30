const _on = require('./__prototype_on')

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
function key(...params) {
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


const _ = {
  url,
  set,
  clear,
  add,
  push,
  use,
  alias,
  key,

  request: function (config) {
    return fetch(this, 'request', undefined, config)
  },

  get FETCH() {
    return fetch(this)
  },


  get: function (url, config) {
    return fetch(this, 'get', url, config)
  },
  get GET() {
    return fetch(this, 'get')
  },


  delete: function (url, config) {
    return fetch(this, 'delete', url, config)
  },
  get DELETE() {
    return fetch(this, 'delete')
  },


  head: function (url, config) {
    return fetch(this, 'head', url, config)
  },
  get HEAD() {
    return fetch(this, 'head')
  },



  options: function (url, config) {
    return fetch(this, 'options', url, config)
  },
  get OPTIONS() {
    return fetch(this, 'options')
  },


  post: function (url, data, config) {
    return fetch(this, 'post', url, config, data)
  },
  get POST() {
    return fetch(this, 'post')
  },


  put: function (url, data, config) {
    return fetch(this, 'put', url, config, data)
  },
  get PUT() {
    return fetch(this, 'put')
  },


  patch: function (url, data, config) {
    return fetch(this, 'patch', url, config, data)
  },
  get PATCH() {
    return fetch(this, 'patch')
  },

  then: function(...params) {
    return fetch(this).then(...params)
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


  get ARRAYBUFFER() {
    return set.call(this, 'responseType', 'arraybuffer')
  },
  get BLOB() {
    return set.call(this, 'responseType', 'blob')
  },
  get DOCUMENT() {
    return set.call(this, 'responseType', 'document')
  },
  get JSON() {
    return set.call(this, 'responseType', 'json')
  },
  get TEXT() {
    return set.call(this, 'responseType', 'text')
  },
  get STREAM() {
    return set.call(this, 'responseType', 'stream')
  },


  Authorization(token) {
    return add.call(this, 'headers', 'Authorization', token)
  },
  ContentType(type) {
    return add.call(this, 'headers', 'Content-Type', type)
  },
  Accept(type) {
    return add.call(this, 'headers', 'Accept', type)
  },

}

_.__proto__ = _on
module.exports = _
