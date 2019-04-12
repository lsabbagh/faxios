'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = require('./.internal/set');

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {string} path the path of the response
 * @returns {object} this
 */
function in_(path) {
  _set2.default.call(this, 'in', path);
  return this;
}

exports.default = in_;