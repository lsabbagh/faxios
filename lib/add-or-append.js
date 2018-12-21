'use strict';

var plainObject = require('./plain-object');
var append = require('./append');
var set = require('./set');
var add = require('./add');

var addOrAppend = function addOrAppend(target, _class) {
  var _this = this;

  var currentValue = this.configuration[target] || {};

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  if (args.length == 1) {
    var input = args[0],
        value = void 0;

    if (input == _class) {
      value = append(_class, currentValue);
    }

    if (typeof input == 'string' || _class && (input instanceof _class || currentValue instanceof _class)) {
      value = append(_class, currentValue, input);
    }

    if (value) {
      set.call(this, target, value);
    } else if (plainObject(input, currentValue)) {
      if (!this.configuration[target]) {
        this.configuration[target] = {};
      }
      Object.assign(this.configuration[target], input);
    }

    return this;
  }

  if (args.length > 1) {
    var key = args[0],
        _value = args[1];


    var urlsearchparams = typeof URLSearchParams != 'undefined';
    var formdata = typeof FormData != 'undefined';

    if (urlsearchparams && currentValue instanceof URLSearchParams || formdata && currentValue instanceof FormData) {
      if (Array.isArray(_value)) {
        var _key = key + '[]';
        _value.forEach(function (_) {
          addOrAppend.call(_this, target, _class, _key, _);
        });
      } else {
        currentValue.append(key, _value);
      }
      return this;
    }

    add.call(this, target, key, _value);
  }
  return this;
};

module.exports = addOrAppend;