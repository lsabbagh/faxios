'use strict';

var fetch = require('./fetch');
var types = require('./types');
var joinUrl = require('proper-url-join');

var __prototype = require('./__prototype');

var faxios = function () {
  return function (url) {
    var _instance = {};

    var __config_proto = {
      listeners: {},
      configuration: {}
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