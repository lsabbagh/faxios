'use strict';

var builders = require('./builders');

module.exports = function () {
  var _this = this;

  for (var _len = arguments.length, builders = Array(_len), _key = 0; _key < _len; _key++) {
    builders[_key] = arguments[_key];
  }

  builders.forEach(function (builder) {
    if (typeof builder == 'function') {
      builder(_this);
      return _this;
    }
    var name = builder;
    builders.build(_this, builder);
  });
  return this;
};