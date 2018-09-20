"use strict";

module.exports = function (target, name) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var _this = this;

  // alias can be done
  if (this[target]) {

    // validate that it is not override a basic method
    if (this.hasOwnProperty(name) || !this[name]) {
      this[name] = function () {
        for (var _len2 = arguments.length, _args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          _args[_key2] = arguments[_key2];
        }

        _this[target].apply(_this, args.concat(_args));
        return _this;
      };
    }
  }
  return this;
};