'use strict';

var plainObject = require('./plain-object');

module.exports = function (target) {
  if (!this.configuration[target]) {
    this.configuration[target] = {};
  }

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var key = args[0],
      value = args[1];


  var _ = this.configuration[target];

  if (plainObject(_)) {
    this.configuration[target][key] = value;
    return this;
  }

  if (typeof _.append == 'function') {
    _.append(key, value);
  }

  return this;
};