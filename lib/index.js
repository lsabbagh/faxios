'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _faxios = require('./.internal/faxios');

var _faxios2 = _interopRequireDefault(_faxios);

var _builders2 = require('./.internal/builders');

var _builders3 = _interopRequireDefault(_builders2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _faxios2.default;

exports.default = _faxios2.default;

// exporting the builders

_faxios2.default.builders = _builders3.default;

if (typeof window !== 'undefined') {
  window.faxios = _faxios2.default;
}

if (typeof global !== 'undefined') {
  global.faxios = _faxios2.default;
}