'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

function on(key, listener) {
  if (typeof listener == 'function') {
    if (!Array.isArray(this.listeners[key])) this.listeners[key] = [];
    this.listeners[key].push(listener);
  }
  return this;
}

var key = function key() {
  for (var _len3 = arguments.length, params = Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
    params[_key4] = arguments[_key4];
  }

  if (params.length == 1 && typeof params[0] == 'function') {
    undefined.key = params[0](undefined.configuration);
  } else {
    undefined.key = params.join('');
  }
  return undefined;
};

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

module.exports = {
  url: url,
  set: set,
  clear: clear,
  add: add,
  push: push,
  use: use,
  on: on,
  alias: alias,
  key: key,

  request: function request(config) {
    return fetch(this, 'request', undefined, config);
  },

  get: function get(url, config) {
    return fetch(this, 'get', url, config);
  },
  delete: function _delete(url, config) {
    return fetch(this, 'delete', url, config);
  },
  head: function head(url, config) {
    return fetch(this, 'head', url, config);
  },
  options: function options(url, config) {
    return fetch(this, 'options', url, config);
  },

  post: function post(url, data, config) {
    return fetch(this, 'post', url, config, data);
  },
  put: function put(url, data, config) {
    return fetch(this, 'put', url, config, data);
  },
  patch: function patch(url, data, config) {
    return fetch(this, 'patch', url, config, data);
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

  before: function before(_listener) {
    return on.call(this, 'before', _listener);
  },
  change: function change(_listener) {
    return on.call(this, 'change', _listener);
  },
  success: function success(_listener) {
    return on.call(this, 'success', _listener);
  },
  error: function error(_listener) {
    return on.call(this, 'error', _listener);
  },
  complete: function complete(_listener) {
    return on.call(this, 'complete', _listener);
  }
};