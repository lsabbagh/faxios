"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 
 * @param  {...any} args objects to be check if plain of not
 * @returns {boolean} 
 * @example
 * 
 * plainObject({})
 *   // => true
 * 
 * plainObject(new Error())
 *   // => false
 * 
 * plainObject(new ForData())
 *   // => false
 */
function plainObject() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var i = 0; i < args.length; i++) {
    if (!args[i] || Object.prototype != args[i].__proto__) return false;
  }
  return true;
}

exports.default = plainObject;