"use strict";

module.exports = function (key, value) {
  if (!this.configuration[key]) {
    this.configuration[key] = [];
  }
  var _ = this.configuration[key];
  if (Array.isArray(_)) _.push(value);
  return this;
};