'use strict';

var fetch = require('./fetch');
var types = require('./types');
var joinUrl = require('proper-url-join');

var aliases = require('./aliases');
var middlewares = require('./middlewares');
var builders = require('./builders');

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

    _instance.use(aliases);
    return _instance;
  };
}();

faxios.middleware = function (key, value) {
  if (value) return middlewares[key] = value;
  return middlewares[key];
};

faxios.builder = function (key, value) {
  if (value) return builder[key] = value;
  return builder[key];
};

module.exports = faxios;