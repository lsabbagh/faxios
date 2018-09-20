"use strict";

module.exports = function (key, value) {
  delete this.configuration[key];
  return this;
};