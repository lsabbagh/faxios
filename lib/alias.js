"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param {string} target the type of the alias
 * @param {string} name the name of the alias
 * @param {string} key the key to be set
 * @returns {object} this
 * @example
 *
 * faxios()
 *  .baseURL('http://jsonplaceholder.typicode.com')
 *
 *
 *  .alias('param', 'mySetter', 'foo')
 *  .mySetter('bar')
 *   // => .param('firstName', 'Wassim')
 *
 *
 *  .FETCH // => Promise
 *  .then(res => {})
 *  .catch(err => {});
 */
function alias(target, name) {
  var _this = this;

  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : name;

  // alias can be done
  var targetFunction = this[target];

  if (!targetFunction) {
    return this;
  }

  // validate that it is not overriding a basic method
  this[name] = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // calling the function
    targetFunction.call.apply(targetFunction, [_this, key].concat(args));
    return _this;
  };

  return this;
}

exports.default = alias;