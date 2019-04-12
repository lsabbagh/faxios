'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _notify = require('./.internal/notify');

var _notify2 = _interopRequireDefault(_notify);

var _onThen = require('./.internal/onThen');

var _onThen2 = _interopRequireDefault(_onThen);

var _onCatch = require('./.internal/onCatch');

var _onCatch2 = _interopRequireDefault(_onCatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var delay = function delay(ms) {
  return new Promise(function (_) {
    return setTimeout(_, ms);
  });
};

var fetch = function fetch(instance) {
  var axiosMethod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  var axiosURL = arguments[2];
  var axiosConfig = arguments[3];
  var axiosData = arguments[4];
  var configuration = instance.configuration;

  var config = _extends({
    url: axiosURL,
    method: axiosMethod
  }, configuration, axiosConfig, {
    data: _extends({}, axiosData, configuration.data)
  });

  if (!Object.keys(config.data).length) {
    delete config.data;
  }

  var uuid = Date.now() + Math.random();

  configuration.uuid = uuid;

  return delay(configuration.debounce || configuration.delay).then(function () {
    if (uuid != configuration.uuid) {
      return Promise.reject('debounced');
    }

    var info = _extends({}, config, {
      key: instance.key,
      loading: true
    });

    (0, _notify2.default)(instance.listeners, info, 'before', 'change', 'info');

    return _axios2.default.request(config).then(function (response) {
      return (0, _onThen2.default)({
        response: response,
        config: config,
        instance: instance
      });
    }).catch(function (error) {
      return (0, _onCatch2.default)({
        error: error,
        config: config,
        instance: instance
      });
    });
  });
};

exports.default = fetch;