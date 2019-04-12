'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _plainObject = require('./plain-object');

var _plainObject2 = _interopRequireDefault(_plainObject);

var _append = require('../append');

var _append2 = _interopRequireDefault(_append);

var _set = require('./set');

var _set2 = _interopRequireDefault(_set);

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addOrAppend(target, _class) {
  var _this = this;

  var currentValue = this.configuration[target] || {};

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  if (args.length == 1) {
    var input = args[0];
    var value = void 0;

    if (input == _class) {
      value = (0, _append2.default)(_class, currentValue);
    }

    if (typeof input == 'string' || _class && (input instanceof _class || currentValue instanceof _class)) {
      value = (0, _append2.default)(_class, currentValue, input);
    }

    if (value) {
      _set2.default.call(this, target, value);
    } else if ((0, _plainObject2.default)(input, currentValue)) {
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

    _add2.default.call(this, target, key, _value);
  }
  return this;
}

exports.default = addOrAppend;