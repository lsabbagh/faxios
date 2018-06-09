'use strict';

var joinUrl = require('proper-url-join');
var plainObject = require('./plain-object');
var set = require('./set');

module.exports = function () {
  var _this = this;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (input) {
    if (!plainObject(input)) {
      set.call(_this, 'url', joinUrl(_this.configuration.url, input));
    } else {
      for (key in input) {
        var _configuration$url = _this.configuration.url,
            url = _configuration$url === undefined ? '' : _configuration$url;

        set.call(_this, 'url', url.replace(key, _[key]));
      }
    }
  });
  return this;
};