"use strict";

module.exports = function (key, listener) {
  var _ = this.listeners[key];
  if (!Array.isArray(_)) {
    _ = [];
  }
  _.push(listener);
  this.listeners[key] = _;
  return this;
};