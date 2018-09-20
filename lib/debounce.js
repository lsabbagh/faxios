'use strict';

var set = require('./set');

module.exports = function (duration, key) {
  set.call(this, 'debounce', duration);
  return this;
};