'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _plainObject = require('./.internal/plain-object');

var _plainObject2 = _interopRequireDefault(_plainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 *
 * @param {FormData|URLSearchParams} _class the class
 * @param  {...any} args arguments
 * @returns {object} this
 */
function append(_class) {
  var result = new _class();

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  args.forEach(function (argument) {
    if ((0, _plainObject2.default)(argument)) {
      var keys = Object.keys(argument);
      keys.forEach(function (key) {
        var value = argument[key];
        result.append(key, value);
      });
      return;
    }
    var source = void 0;
    if (argument instanceof _class) {
      source = [].concat(_toConsumableArray(argument.entries()));
    } else {
      source = [].concat(_toConsumableArray(new _class(argument).entries()));
    }

    if (source) {
      source.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return result.append(key, value);
      });
    }
  });

  return result;
}

exports.default = append;