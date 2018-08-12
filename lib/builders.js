'use strict';

module.exports = {
  _builders: {},
  add: function add(name, builder) {

    // @TODO: invalid params
    if (typeof name != 'string' || typeof builder !== 'function') return;

    // @TODO: name exist
    //   this[name]

    this._builders[name] = builder;
  },


  get get() {
    return this._builders;
  },

  build: function build(instance, name) {
    if (this._builders[name]) {
      instance.build(this._builders[name]);
    }
  }
};