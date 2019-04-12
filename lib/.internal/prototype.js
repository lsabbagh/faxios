'use strict';

var _module$exports;

var _set = require('./set');

var _set2 = _interopRequireDefault(_set);

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

var _key3 = require('./key');

var _key4 = _interopRequireDefault(_key3);

var _param = require('../param');

var _param2 = _interopRequireDefault(_param);

var _data = require('../data');

var _data2 = _interopRequireDefault(_data);

var _fetch2 = require('../fetch');

var _fetch3 = _interopRequireDefault(_fetch2);

var _on = require('../on');

var _on2 = _interopRequireDefault(_on);

var _alias = require('../alias');

var _alias2 = _interopRequireDefault(_alias);

var _cancel = require('../cancel');

var _cancel2 = _interopRequireDefault(_cancel);

var _clear = require('../clear');

var _clear2 = _interopRequireDefault(_clear);

var _push = require('../push');

var _push2 = _interopRequireDefault(_push);

var _build = require('../build');

var _build2 = _interopRequireDefault(_build);

var _debounce = require('../debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _in2 = require('../in');

var _in3 = _interopRequireDefault(_in2);

var _url = require('../url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // internals


// public


module.exports = (_module$exports = {
  url: _url2.default, set: _set2.default, clear: _clear2.default, add: _add2.default, push: _push2.default, build: _build2.default, alias: _alias2.default, key: _key4.default, cancel: _cancel2.default, on: _on2.default, param: _param2.default, data: _data2.default, debounce: _debounce2.default,
  in: _in3.default,

  request: function request(config) {
    return (0, _fetch3.default)(this, undefined, undefined, config);
  },

  get FETCH() {
    return (0, _fetch3.default)(this);
  },

  get: function get(url, config) {
    return (0, _fetch3.default)(this, 'get', url, config);
  },
  get GET() {
    return (0, _fetch3.default)(this, 'get');
  },

  delete: function _delete(url, config) {
    return (0, _fetch3.default)(this, 'delete', url, config);
  },
  get DELETE() {
    return (0, _fetch3.default)(this, 'delete');
  },

  head: function head(url, config) {
    return (0, _fetch3.default)(this, 'head', url, config);
  },
  get HEAD() {
    return (0, _fetch3.default)(this, 'head');
  },

  options: function options(url, config) {
    return (0, _fetch3.default)(this, 'options', url, config);
  },
  get OPTIONS() {
    return (0, _fetch3.default)(this, 'options');
  },

  post: function post(url, data, config) {
    return (0, _fetch3.default)(this, 'post', url, config, data);
  },
  get POST() {
    return (0, _fetch3.default)(this, 'post');
  },

  put: function put(url, data, config) {
    return (0, _fetch3.default)(this, 'put', url, config, data);
  },
  get PUT() {
    return (0, _fetch3.default)(this, 'put');
  },

  patch: function patch(url, data, config) {
    return (0, _fetch3.default)(this, 'patch', url, config, data);
  },
  get PATCH() {
    return (0, _fetch3.default)(this, 'patch');
  },

  then: function then() {
    var _fetch;

    return (_fetch = (0, _fetch3.default)(this)).then.apply(_fetch, arguments);
  },

  method: function method(_method) {
    return _set2.default.call(this, 'method', _method);
  },

  baseURL: function baseURL(_baseURL) {
    return _set2.default.call(this, 'baseURL', _baseURL);
  },

  header: function header() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _add2.default.call.apply(_add2.default, [this, 'headers'].concat(args));
  },

  delay: function delay() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _set2.default.call.apply(_set2.default, [this, 'delay'].concat(args));
  },

  log: function log(options) {
    return _set2.default.call(this, 'log', options);
  },
  get LOG() {
    return _set2.default.call(this, 'log', true);
  },

  responseType: function responseType(type) {
    return _set2.default.call(this, 'responseType', type);
  },
  Authorization: function Authorization(token) {
    return _add2.default.call(this, 'headers', 'Authorization', token);
  },
  ContentType: function ContentType(type) {
    return _add2.default.call(this, 'headers', 'Content-Type', type);
  },
  Accept: function Accept(type) {
    return _add2.default.call(this, 'headers', 'Accept', type);
  },


  onBefore: function onBefore(_listener) {
    return _on2.default.call(this, 'before', _listener);
  },
  onChange: function onChange(_listener) {
    return _on2.default.call(this, 'change', _listener);
  },
  onSuccess: function onSuccess(_listener) {
    return _on2.default.call(this, 'success', _listener);
  },
  onError: function onError(_listener) {
    return _on2.default.call(this, 'error', _listener);
  },
  onComplete: function onComplete(_listener) {
    return _on2.default.call(this, 'complete', _listener);
  },

  onInformational: function onInformational(_listener) {
    return _on2.default.call(this, '1[0-9][0-9]', _listener);
  }
}, _defineProperty(_module$exports, 'onSuccess', function onSuccess(_listener) {
  return _on2.default.call(this, '2[0-9][0-9]', _listener);
}), _defineProperty(_module$exports, 'onRedirectional', function onRedirectional(_listener) {
  return _on2.default.call(this, '3[0-9][0-9]', _listener);
}), _defineProperty(_module$exports, 'onClientError', function onClientError(_listener) {
  return _on2.default.call(this, '4[0-9][0-9]', _listener);
}), _defineProperty(_module$exports, 'onServerError', function onServerError(_listener) {
  return _on2.default.call(this, '5[0-9][0-9]', _listener);
}), _defineProperty(_module$exports, 'onBadRequest', function onBadRequest(_listener) {
  return _on2.default.call(this, 'BadRequest', _listener);
}), _defineProperty(_module$exports, 'onUnauthorized', function onUnauthorized(_listener) {
  return _on2.default.call(this, 'Unauthorized', _listener);
}), _defineProperty(_module$exports, 'onForbidden', function onForbidden(_listener) {
  return _on2.default.call(this, 'Forbidden', _listener);
}), _defineProperty(_module$exports, 'onNotFound', function onNotFound(_listener) {
  return _on2.default.call(this, 'NotFound', _listener);
}), _defineProperty(_module$exports, 'onInternalServerError', function onInternalServerError(_listener) {
  return _on2.default.call(this, 'InternalServerError', _listener);
}), _defineProperty(_module$exports, 'onBadGateway', function onBadGateway(_listener) {
  return _on2.default.call(this, 'BadGateway', _listener);
}), _defineProperty(_module$exports, 'onServiceUnavailable', function onServiceUnavailable(_listener) {
  return _on2.default.call(this, 'ServiceUnavailable', _listener);
}), _defineProperty(_module$exports, 'onGatewayTimeout', function onGatewayTimeout(_listener) {
  return _on2.default.call(this, 'GatewayTimeout', _listener);
}), _module$exports);