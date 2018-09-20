'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var faxios = require('./faxios');

var _builders = require('./builders');

module.exports = faxios;

exports.default = faxios;

// exporting the builders

faxios.builders = _builders;
var builders = exports.builders = _builders;

if (typeof window !== 'undefined') {
  window.faxios = faxios;
}

if (typeof global !== 'undefined') {
  global.faxios = faxios;
}