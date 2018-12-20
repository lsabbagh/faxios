'use strict';

var set = require('./set');

module.exports = function (input) {
  set.call(this, 'in', input);
  return this;
};