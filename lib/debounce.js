'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = require('./.internal/set');

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {number} duration the duration debounce time
 * @returns {object} this
 */
function debounce(duration) {
  _set2.default.call(this, 'debounce', duration);
  return this;
}

exports.default = debounce;