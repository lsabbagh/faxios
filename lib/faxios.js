'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fetch = require('./fetch');
var types = require('./types');
var joinUrl = require('proper-url-join');

var _aliases = require('./defaults/aliases');

var _middlewares = {};

var faxios = function () {
  return function () {
    var _instance = {};
    var _ = {
      _instance: _instance,
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
    };

    var set = function set(key, value) {
      if (types.any.includes(key)) {
        _.configuration[key] = value;
      }
      return _instance;
    };

    var clear = function clear(key, value) {
      if (types.any.includes(key)) {
        delete _.configuration[key];
      }
      return _instance;
    };

    var url = function url() {
      for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      return set('url', joinUrl.apply(undefined, [_.configuration.url].concat(params)));
    };

    var push = function push(key, value) {
      if (types.array.includes(key) && typeof value == 'function') {
        if (!_.configuration[key]) _.configuration[key] = [];
        _.configuration[key].push(value);
      }
      return _instance;
    };

    var add = function add(target) {
      for (var _len2 = arguments.length, params = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }

      if (types.object.includes(target)) {
        if (!_.configuration[target]) _.configuration[target] = {};
        if (params.length == 2) {
          var _key3 = params[0],
              value = params[1];

          _.configuration[target][_key3] = value;
        } else if (params.length == 1) {
          var _params = params[0];

          _.configuration[target] = _extends({}, _.configuration[target], _params);
        }
      }
      return _instance;
    };

    var on = function on(name, _listener) {
      if (_.listeners[name] && typeof _listener == 'function') {
        _.listeners[name].push(_listener);
      }
      return _instance;
    };

    var key = function key() {
      for (var _len3 = arguments.length, params = Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        params[_key4] = arguments[_key4];
      }

      if (params.length == 1 && typeof params[0] == 'function') {
        _.key = params[0](_.configuration);
      } else {
        _.key = params.join('');
      }
      return _instance;
    };

    var alias = function alias(type, name, key) {
      if (!_instance[name] && _instance[type]) {
        _instance[name] = function (value) {
          _instance[type](key || name, value);
          return _instance;
        };
      }
      return _instance;
    };

    var use = function use(middleware) {
      if (typeof middleware == 'function') middleware(_instance, _.configuration, _.listeners);else if (_middlewares[middleware]) _middlewares[middleware](_instance, _.configuration, _.listeners);
      return _instance;
    };

    _instance = _extends({}, _instance, {
      set: set,
      clear: clear,
      add: add,
      push: push,
      use: use,
      on: on,
      alias: alias,
      key: key,

      request: function request(config) {
        return fetch(_, 'request', undefined, config);
      },

      get: function get(url, config) {
        return fetch(_, 'get', url, config);
      },
      delete: function _delete(url, config) {
        return fetch(_, 'delete', url, config);
      },
      head: function head(url, config) {
        return fetch(_, 'head', url, config);
      },
      options: function options(url, config) {
        return fetch(_, 'options', url, config);
      },

      post: function post(url, data, config) {
        return fetch(_, 'post', url, config, data);
      },
      put: function put(url, data, config) {
        return fetch(_, 'put', url, config, data);
      },
      patch: function patch(url, data, config) {
        return fetch(_, 'patch', url, config, data);
      },

      url: url,
      mehod: function mehod(method) {
        return set('method', method);
      },
      baseURL: function baseURL(_baseURL) {
        return set('baseURL', _baseURL);
      },

      header: function header() {
        for (var _len4 = arguments.length, params = Array(_len4), _key5 = 0; _key5 < _len4; _key5++) {
          params[_key5] = arguments[_key5];
        }

        return add.apply(undefined, ['headers'].concat(params));
      },

      param: function param() {
        for (var _len5 = arguments.length, params = Array(_len5), _key6 = 0; _key6 < _len5; _key6++) {
          params[_key6] = arguments[_key6];
        }

        return add.apply(undefined, ['params'].concat(params));
      },
      data: function data() {
        for (var _len6 = arguments.length, params = Array(_len6), _key7 = 0; _key7 < _len6; _key7++) {
          params[_key7] = arguments[_key7];
        }

        return add.apply(undefined, ['data'].concat(params));
      },

      before: function before(_listener) {
        return on('before', _listener);
      },
      change: function change(_listener) {
        return on('change', _listener);
      },
      success: function success(_listener) {
        return on('success', _listener);
      },
      error: function error(_listener) {
        return on('error', _listener);
      },
      complete: function complete(_listener) {
        return on('complete', _listener);
      }

    });
    _instance.use(_aliases);
    return _instance;
  };
}();

faxios.middleware = function (key, value) {
  if (value) return _middlewares[key] = value;
  return _middlewares[key];
};

module.exports = faxios;