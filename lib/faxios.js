'use strict';

var fetch = require('./fetch');
var joinUrl = require('proper-url-join');
var axios = require('axios');

var __prototype = require('./__prototype');

var faxios = function () {
  return function (url) {
    var _axios$CancelToken$so = axios.CancelToken.source(),
        cancelToken = _axios$CancelToken$so.token,
        cancel = _axios$CancelToken$so.cancel;

    var time = new Date().getTime();

    var _instance = {};
    var __config_proto = {
      listeners: {},
      configuration: {
        cancelToken: cancelToken,
        cancel: cancel,
        time: time
      }

    };

    __config_proto.__proto__ = __prototype;
    _instance.__proto__ = __config_proto;

    if (typeof url == 'string') {
      _instance.url(url);
    }

    return _instance;
  };
}();

module.exports = faxios;