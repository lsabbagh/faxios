"use strict";

module.exports = function (target, name) {
  var _this = this;

  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : name;

  // alias can be done
  if (this[target]) {

    // validate that it is not overriding a basic method
    if (!this[name]) {
      this[name] = function () {
        for (var _len = arguments.length, _args = Array(_len), _key = 0; _key < _len; _key++) {
          _args[_key] = arguments[_key];
        }

        _this[target].apply(_this, [key].concat(_args));
        return _this;
      };
    }
  }
  return this;
};