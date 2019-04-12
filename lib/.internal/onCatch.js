'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _log = require('../log');

var _log2 = _interopRequireDefault(_log);

var _notify = require('./notify');

var _notify2 = _interopRequireDefault(_notify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onCatch(_ref) {
  var _ref$error = _ref.error,
      error = _ref$error === undefined ? {} : _ref$error,
      config = _ref.config,
      instance = _ref.instance;

  if (error.response && config.in) {
    error.response = (0, _lodash2.default)(error.response, config.in);
  }
  var key = instance.key;

  var info = _extends({ key: key }, config, { loading: false, error: error });
  var _error$response = error.response,
      response = _error$response === undefined ? {} : _error$response;

  (0, _notify2.default)(instance.listeners, info, 'change', 'error', 'complete', response.status);
  (0, _log2.default)(info, instance.configuration.log);
  return Promise.reject(error);
}

exports.default = onCatch;