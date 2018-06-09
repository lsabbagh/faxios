'use strict';

var plainObject = require('./plain-object');
var append = require('./append');
var set = require('./set');
var add = require('./add');

module.exports = function (target, _class) {

  var currentValue = this.configuration[target] || {};

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (args.length == 1) {
    var input = args[0],
        value = void 0;

    if (input == _class) {
      value = append(_class, currentValue);
    }

    if (typeof input == 'string' || input instanceof _class || currentValue instanceof _class) {
      value = append(_class, currentValue, input);
    }

    if (value) {
      set.call(this, target, value);
    } else if (plainObject(input, currentValue)) {
      Object.assign(this.configuration[target], input);
    }

    return this;
  }

  if (args.length > 1) {
    var key = args[0],
        _value = args[1];

    if (currentValue instanceof URLSearchParams) {
      currentValue.append(key, _value);
      return this;
    }

    add.call(this, target, key, _value);
  }
  return this;
};