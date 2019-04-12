'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _statuses = require('./.internal/statuses');

var _statuses2 = _interopRequireDefault(_statuses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {string} query query string or number or regex
 * @param {function} listener the callback function
 * @returns {object} this
 * @example
 * faxios()
 *   .baseURL('http://jsonplaceholder.typicode.com')
 *   .url('/posts')
 *
 *   .data('foo', 'bar')
 *
 *   .on('success', () => {....})
 *   .on(200, () => {....})
 *
 *
 *
 *   .on(404,  () => {....})
 *   .on('notFound',  () => {....})
 *
 *   .on(/200|400/, () => {....})
 *
 *   .on('Bad Request', () => {....})
 *
 *   .on(new RegExp('200|400'), () => {....})
 *   .on('2.*', () => {....}egex 2.*'))
 *
 *   .POST // => Promise
 *   .then(res => {})
 *   .catch(err => {});
 *
 */

function on(query, listener) {
  var query_ = _statuses2.default.fix(query);

  var _ = this.listeners[query_];
  if (!Array.isArray(_)) {
    _ = [];
  }
  _.push(listener);
  this.listeners[query_] = _;
  return this;
}

exports.default = on;