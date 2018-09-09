'use strict';

var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var joinUrl = require('proper-url-join');

var builders = require('./builders');

var plainObject = require('./plain-object');

var set = require('./set');
var add = require('./add');
var param = require('./param');
var data = require('./data');
var fetch = require('./fetch');
var on = require('./on');
var key = require('./key');
var alias = require('./alias');
var cancel = require('./cancel');
var clear = require('./clear');
var url = require('./url');
var push = require('./push');
var build = require('./build');
var debounce = require('./debounce');

// shorthands
var p = param;
var d = data;
var f = fetch;
var u = url;
var b = build;

module.exports = (_module$exports = {
  url: url, set: set, clear: clear, add: add, push: push, build: build, alias: alias, key: key, cancel: cancel, on: on, param: param, data: data, debounce: debounce,
  p: p, d: d, f: f, u: u, b: b,

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
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return add.call.apply(add, [this, 'headers'].concat(args));
  },

  delay: function delay() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return set.call.apply(set, [this, 'delay'].concat(args));
  },

  log: function log(options) {
    return set.call(this, 'log', options);
  },
  get LOG() {
    return set.call(this, 'log', true);
  },

  responseType: function responseType(type) {
    return set.call(this, 'responseType', type);
  },
  Authorization: function Authorization(token) {
    return add.call(this, 'headers', 'Authorization', token);
  },
  ContentType: function ContentType(type) {
    return add.call(this, 'headers', 'Content-Type', type);
  },
  Accept: function Accept(type) {
    return add.call(this, 'headers', 'Accept', type);
  },


  onBefore: function onBefore(_listener) {
    return on.call(this, 'before', _listener);
  },
  onChange: function onChange(_listener) {
    return on.call(this, 'change', _listener);
  },
  onSuccess: function onSuccess(_listener) {
    return on.call(this, 'success', _listener);
  },
  onError: function onError(_listener) {
    return on.call(this, 'error', _listener);
  },
  onComplete: function onComplete(_listener) {
    return on.call(this, 'complete', _listener);
  },

  onInformational: function onInformational(_listener) {
    return on.call(this, '1[0-9][0-9]', _listener);
  }
}, _defineProperty(_module$exports, 'onSuccess', function onSuccess(_listener) {
  return on.call(this, '2[0-9][0-9]', _listener);
}), _defineProperty(_module$exports, 'onRedirectional', function onRedirectional(_listener) {
  return on.call(this, '3[0-9][0-9]', _listener);
}), _defineProperty(_module$exports, 'onClientError', function onClientError(_listener) {
  return on.call(this, '4[0-9][0-9]', _listener);
}), _defineProperty(_module$exports, 'onServerError', function onServerError(_listener) {
  return on.call(this, '5[0-9][0-9]', _listener);
}), _module$exports);