const joinUrl = require('proper-url-join')

const builders = require('./builders')

const set = require('./set')
const add = require('./add')
const param = require('./param')
const data = require('./data')
const fetch = require('./fetch')
const on = require('./on')
const key = require('./key')
const alias = require('./alias')
const cancel = require('./cancel')
const clear = require('./clear')
const url = require('./url')
const push = require('./push')
const build = require('./build')
const debounce = require('./debounce')
const _in = require('./in')

// shorthands
const p = param
const d = data
const f = fetch
const u = url
const b = build


module.exports = {
  url, set, clear, add, push, build, alias, key, cancel, on, param, data, debounce,
  in: _in,
  p, d, f, u, b,

  request: function (config) { return fetch(this, 'request', undefined, config) },

  get FETCH() { return fetch(this) },


  get: function (url, config) { return fetch(this, 'get', url, config) },
  get GET() { return fetch(this, 'get') },


  delete: function (url, config) { return fetch(this, 'delete', url, config) },
  get DELETE() { return fetch(this, 'delete') },


  head: function (url, config) { return fetch(this, 'head', url, config) },
  get HEAD() { return fetch(this, 'head') },



  options: function (url, config) { return fetch(this, 'options', url, config) },
  get OPTIONS() { return fetch(this, 'options') },


  post: function (url, data, config) { return fetch(this, 'post', url, config, data) },
  get POST() { return fetch(this, 'post') },


  put: function (url, data, config) { return fetch(this, 'put', url, config, data) },
  get PUT() { return fetch(this, 'put') },


  patch: function (url, data, config) { return fetch(this, 'patch', url, config, data) },
  get PATCH() { return fetch(this, 'patch') },

  then: function (...args) { return fetch(this).then(...args) },

  method: function (method) { return set.call(this, 'method', method) },

  baseURL: function (baseURL) { return set.call(this, 'baseURL', baseURL) },

  header: function (...args) { return add.call(this, 'headers', ...args) },

  delay: function (...args) { return set.call(this, 'delay', ...args) },

  log: function (options) { return set.call(this, 'log', options) },
  get LOG() { return set.call(this, 'log', true) },

  responseType(type) { return set.call(this, 'responseType', type) },

  Authorization(token) { return add.call(this, 'headers', 'Authorization', token) },
  ContentType(type) { return add.call(this, 'headers', 'Content-Type', type) },
  Accept(type) { return add.call(this, 'headers', 'Accept', type) },



  onBefore: function (_listener) { return on.call(this, 'before', _listener) },
  onChange: function (_listener) { return on.call(this, 'change', _listener) },
  onSuccess: function (_listener) { return on.call(this, 'success', _listener) },
  onError: function (_listener) { return on.call(this, 'error', _listener) },
  onComplete: function (_listener) { return on.call(this, 'complete', _listener) },


  onInformational: function (_listener) { return on.call(this, '1[0-9][0-9]', _listener) },
  onSuccess: function (_listener) { return on.call(this, '2[0-9][0-9]', _listener) },
  onRedirectional: function (_listener) { return on.call(this, '3[0-9][0-9]', _listener) },
  onClientError: function (_listener) { return on.call(this, '4[0-9][0-9]', _listener) },
  onServerError: function (_listener) { return on.call(this, '5[0-9][0-9]', _listener) }

}
