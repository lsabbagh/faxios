'use strict';

var builders = require('./builders');

module.exports = function (builder) {
  if (typeof builder == 'function') {
    builder(this);
    return this;
  }

  var name = builder;
  builders.build(this, builder);
  return this;
};