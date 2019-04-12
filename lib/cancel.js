"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 *
 * @param {*} message Message to be passed to be catched as an error
 */

function cancel(message) {
  this.configuration.cancel(message);
  return this;
}

exports.default = cancel;