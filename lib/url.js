'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _properUrlJoin = require('proper-url-join');

var _properUrlJoin2 = _interopRequireDefault(_properUrlJoin);

var _plainObject = require('./.internal/plain-object');

var _plainObject2 = _interopRequireDefault(_plainObject);

var _set = require('./.internal/set');

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param  {...any} args The url parts to be combined
 * @returns {object} this
 */
function url() {
  var _this = this;

  var _configuration$url = this.configuration.url,
      url = _configuration$url === undefined ? '' : _configuration$url;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (input) {
    _setUrl.call(_this, input, url);
  });
  return this;
}

exports.default = url;


function _setUrl(input, url_) {
  var _this2 = this;

  if (!(0, _plainObject2.default)(input)) {
    _set2.default.call(this, 'url', (0, _properUrlJoin2.default)(url_, input));
    return;
  }
  var keys = Object.keys(input);
  keys.forEach(function (key) {
    var value = input[key];
    _set2.default.call(_this2, 'url', url_.replace(key, value));
  });
}