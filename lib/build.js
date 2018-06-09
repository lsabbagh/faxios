'use strict';

module.exports = function (builder) {
  if (typeof builder == 'function') {
    builder(this);
    return this;
  }

  var name = builder;
  if (builders.get[name]) {
    builders.get[name](this);
  }
  return this;
};