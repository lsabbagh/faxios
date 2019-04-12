'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addOrAppend = require('./.internal/add-or-append');

var _addOrAppend2 = _interopRequireDefault(_addOrAppend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param  {object|string|URLSearchParams} key key or object
 * @param  {string} [value] value
 * @returns {object} this
 */
function param() {
  var urlsearchparams = typeof URLSearchParams != 'undefined';

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  _addOrAppend2.default.call.apply(_addOrAppend2.default, [this, 'params', urlsearchparams && URLSearchParams].concat(args));
  return this;
}

exports.default = param;