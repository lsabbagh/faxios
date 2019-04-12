'use strict';

var _prototype = require('./prototype');

var _prototype2 = _interopRequireDefault(_prototype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var faxios = function () {
  return function (url) {
    // let {
    //   token: cancelToken,
    //   cancel
    // } = axios.CancelToken.source()
    var time = new Date().getTime();

    var _instance = {};
    var __config_proto = {
      __proto__: _prototype2.default,
      listeners: {},
      configuration: {
        // cancelToken,
        // cancel,
        time: time
      }

    };

    _instance.__proto__ = __config_proto;

    if (typeof url == 'string') {
      _instance.url(url);
    }

    return _instance;
  };
}(); // import axios from 'axios'

module.exports = faxios;