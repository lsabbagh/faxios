'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  add: function add(name, builder) {

    // @TODO: invalid params
    if (typeof name == 'string' || typeof builder !== 'function') return;

    // @TODO: name exist
    //   this[name]

    this[name] = builder;
  },

  build: function build(instance, name) {
    if (this[name]) instance.use(this[name]);
  }
};