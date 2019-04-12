'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addOrAppend = require('./.internal/add-or-append');

var _addOrAppend2 = _interopRequireDefault(_addOrAppend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {...any} args The args
 * @returns {object} this
 *
 * @example
 * faxios()
 *   .baseURL('http://jsonplaceholder.typicode.com')
 *   .url('/posts')
 *
 *   .data('foo', 'bar')
 *
 *   .POST // => Promise
 *   .then(res => {})
 *   .catch(err => {});
 *
 * @example
 * faxios()
 *   .baseURL('http://jsonplaceholder.typicode.com')
 *   .url('/posts')
 *
 *   .data({
 *     key1: 'value1',
 *     key2: 'value2',
 *     key3: 'value3'
 *   })
 *
 *   .POST // => Promise
 *   .then(res => {})
 *   .catch(err => {});
 */
function data() {
  var formdata = typeof FormData != 'undefined';

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  _addOrAppend2.default.call.apply(_addOrAppend2.default, [this, 'data', formdata && FormData].concat(args));
  return this;
}

exports.default = data;