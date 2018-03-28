'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fetch = require('./fetch');
var types = require('./types');

var faxios = function () {
  return function () {
    var _instance = {};
    var _ = {
      _instance: _instance,
      listeners: {
        pre: [],
        change: [],
        success: [],
        error: [],
        done: []
      },
      configuration: {}
    };

    var set = function set(key, value) {
      if (types.any.includes(key)) {
        _.configuration[key] = value;
      }
      return _instance;
    };

    var push = function push(key, value) {
      if (types.array.includes(key) && typeof value == 'function') {
        if (!_.configuration[key]) _.configuration[key] = [];
        _.configuration[key].push(value);
      }
      return _instance;
    };

    var add = function add(target) {
      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      if (types.object.includes(target)) {
        if (!_.configuration[target]) _.configuration[target] = {};
        if (params.length == 2) {
          var key = params[0],
              value = params[1];

          _.configuration[target][key] = value;
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

    _instance = _extends({}, _instance, {
      set: set,
      add: add,
      push: push,
      on: on,

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

      method: function method(_method) {
        return set('method', _method);
      },
      url: function url(_url) {
        return set('url', _url);
      },
      mehod: function mehod(method) {
        return set('method', method);
      },
      baseURL: function baseURL(_baseURL) {
        return set('baseURL', _baseURL);
      },

      header: function header() {
        for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          params[_key2] = arguments[_key2];
        }

        return add.apply(undefined, ['headers'].concat(params));
      },
      param: function param() {
        for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          params[_key3] = arguments[_key3];
        }

        return add.apply(undefined, ['params'].concat(params));
      },
      data: function data() {
        for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          params[_key4] = arguments[_key4];
        }

        return add.apply(undefined, ['data'].concat(params));
      },

      pre: function pre(_listener) {
        return on('pre', _listener);
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
      done: function done(_listener) {
        return on('done', _listener);
      }
    });
    return _instance;
  };
}();

module.exports = faxios;