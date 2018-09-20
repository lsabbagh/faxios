'use strict';

module.exports = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length == 1 && typeof args[0] == 'function') {
    this.key = args[0](this.configuration);
  } else {
    this.key = args.join('');
  }
  return this;
};