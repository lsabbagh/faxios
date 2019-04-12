'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _builders2 = require('./.internal/builders');

var _builders3 = _interopRequireDefault(_builders2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The build function to be used with the builders
 *
 * @param  {...(string|function)} builders The builders
 * @example
 * faxios()
 * .baseURL('http://jsonplaceholder.typicode.com')
 * .alias('param', 'id', 'postId') // <-- setting the alias
 * .postId(1)
 *
 * .FETCH // => Promise
 * .then(res => {})
 * .catch(err => {});
 */

function build() {
  var _this = this;

  for (var _len = arguments.length, builders = Array(_len), _key = 0; _key < _len; _key++) {
    builders[_key] = arguments[_key];
  }

  builders.forEach(function (builder) {
    if (typeof builder == 'function') {
      builder(_this);
      return _this;
    }
    _builders3.default.build(_this, builder);
  });
  return this;
}

exports.default = build;