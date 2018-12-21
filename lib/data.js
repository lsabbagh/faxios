'use strict';

var addOrAppendTo = require('./add-or-append');
module.exports = function () {
  var formdata = typeof FormData != 'undefined';

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  addOrAppendTo.call.apply(addOrAppendTo, [this, 'data', formdata && FormData].concat(args));
  return this;
};