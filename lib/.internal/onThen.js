'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _notify = require('./notify');

var _notify2 = _interopRequireDefault(_notify);

var _log = require('../log');

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onThen(_ref) {
  var response = _ref.response,
      config = _ref.config,
      instance = _ref.instance;
  var status = response.status;
  var key = instance.key;

  var resultResponse = config.in ? (0, _lodash2.default)(response, config.in) : response;
  var info = _extends({
    key: key
  }, config, {
    loading: false,
    response: response
  });
  (0, _notify2.default)(instance.listeners, info, 'change', 'success', 'complete', status);
  (0, _log2.default)(info, instance.configuration.log);
  return resultResponse;
}

exports.default = onThen;