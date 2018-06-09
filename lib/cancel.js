"use strict";

exports.module = function (message) {
  this.configuration.cancel(message);
  return this;
};