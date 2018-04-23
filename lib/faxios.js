'use strict';

var fetch = require('./fetch');
var types = require('./types');
var joinUrl = require('proper-url-join');

var _aliases = require('./defaults/aliases');

var middlewares = require('./middlewares');

var __prototype = require('./__prototype');

var faxios = function () {
  return function () {
    var _instance = {};

    var __config_proto = {
      listeners: {},
      configuration: {}
    };

    __config_proto.__proto__ = __prototype;
    _instance.__proto__ = __config_proto;

    _instance.use(_aliases);
    return _instance;
  };
}();

faxios.middleware = function (key, value) {
  if (value) return middlewares[key] = value;
  return middlewares[key];
};

module.exports = faxios;