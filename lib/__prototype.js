'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _on = require('./__prototype_on');

var fetch = require('./fetch');
var types = require('./types');
var joinUrl = require('proper-url-join');
var middlewares = require('./middlewares');

function set(key, value) {
  if (types.any.includes(key)) {
    this.configuration[key] = value;
  }
  return this;
}

function clear(key, value) {
  if (types.any.includes(key)) {
    delete this.configuration[key];
  }
  return this;
}

function url() {
  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  set.call(this, 'url', joinUrl.apply(undefined, [this.configuration.url].concat(params)));
  return this;
}

function push(key, value) {
  if (types.array.includes(key) && typeof value == 'function') {
    if (!this.configuration[key]) this.configuration[key] = [];
    this.configuration[key].push(value);
  }
  return this;
}

function add(target) {
  if (types.object.includes(target)) {
    if (!this.configuration[target]) this.configuration[target] = {};

    for (var _len2 = arguments.length, params = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }

    if (params.length == 2) {
      var _key3 = params[0],
          value = params[1];

      this.configuration[target][_key3] = value;
    } else if (params.length == 1) {
      var _params = params[0];

      this.configuration[target] = _extends({}, this.configuration[target], _params);
    }
  }
  return this;
}
function key() {
  for (var _len3 = arguments.length, params = Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
    params[_key4] = arguments[_key4];
  }

  if (params.length == 1 && typeof params[0] == 'function') {
    this.key = params[0](this.configuration);
  } else {
    this.key = params.join('');
  }
  return this;
}

function alias(type, name, key) {
  var _this = this;

  if (!this[name] && this[type]) {
    this[name] = function (value) {
      _this[type](key || name, value);
      return _this;
    };
  }
  return this;
}

function use(middleware) {
  if (typeof middleware == 'function') middleware(this);else if (middlewares[middleware]) middlewares[middleware](this);
  return this;
}

var _ = {
  url: url,
  set: set,
  clear: clear,
  add: add,
  push: push,
  use: use,
  alias: alias,
  key: key,

  request: function request(config) {
    return fetch(this, 'request', undefined, config);
  },

  get FETCH() {
    return fetch(this);
  },

  get: function get(url, config) {
    return fetch(this, 'get', url, config);
  },
  get GET() {
    return fetch(this, 'get');
  },

  delete: function _delete(url, config) {
    return fetch(this, 'delete', url, config);
  },
  get DELETE() {
    return fetch(this, 'delete');
  },

  head: function head(url, config) {
    return fetch(this, 'head', url, config);
  },
  get HEAD() {
    return fetch(this, 'head');
  },

  options: function options(url, config) {
    return fetch(this, 'options', url, config);
  },
  get OPTIONS() {
    return fetch(this, 'options');
  },

  post: function post(url, data, config) {
    return fetch(this, 'post', url, config, data);
  },
  get POST() {
    return fetch(this, 'post');
  },

  put: function put(url, data, config) {
    return fetch(this, 'put', url, config, data);
  },
  get PUT() {
    return fetch(this, 'put');
  },

  patch: function patch(url, data, config) {
    return fetch(this, 'patch', url, config, data);
  },
  get PATCH() {
    return fetch(this, 'patch');
  },

  then: function then() {
    var _fetch;

    return (_fetch = fetch(this)).then.apply(_fetch, arguments);
  },

  method: function method(_method) {
    return set.call(this, 'method', _method);
  },

  baseURL: function baseURL(_baseURL) {
    return set.call(this, 'baseURL', _baseURL);
  },

  header: function header() {
    for (var _len4 = arguments.length, params = Array(_len4), _key5 = 0; _key5 < _len4; _key5++) {
      params[_key5] = arguments[_key5];
    }

    return add.call.apply(add, [this, 'headers'].concat(params));
  },

  param: function param() {
    for (var _len5 = arguments.length, params = Array(_len5), _key6 = 0; _key6 < _len5; _key6++) {
      params[_key6] = arguments[_key6];
    }

    return add.call.apply(add, [this, 'params'].concat(params));
  },

  data: function data() {
    for (var _len6 = arguments.length, params = Array(_len6), _key7 = 0; _key7 < _len6; _key7++) {
      params[_key7] = arguments[_key7];
    }

    return add.call.apply(add, [this, 'data'].concat(params));
  },

  get ARRAYBUFFER() {
    return set.call(this, 'responseType', 'arraybuffer');
  },
  get BLOB() {
    return set.call(this, 'responseType', 'blob');
  },
  get DOCUMENT() {
    return set.call(this, 'responseType', 'document');
  },
  get JSON() {
    return set.call(this, 'responseType', 'json');
  },
  get TEXT() {
    return set.call(this, 'responseType', 'text');
  },
  get STREAM() {
    return set.call(this, 'responseType', 'stream');
  },

  Authorization: function Authorization(token) {
    return add.call(this, 'headers', 'Authorization', token);
  },
  ContentType: function ContentType(type) {
    return add.call(this, 'headers', 'Content-Type', type);
  },
  Accept: function Accept(type) {
    return add.call(this, 'headers', 'Accept', type);
  }
};

_.__proto__ = _on;
module.exports = _;