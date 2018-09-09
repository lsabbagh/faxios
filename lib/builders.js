'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = {
  _builders: {},
  add: function add() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    switch (params.length) {
      case 1:
        var _obj = params[0];

        if ((typeof _ojb === 'undefined' ? 'undefined' : _typeof(_ojb)) == 'object') {
          for (var _name in _obj) {
            addBuilder(this._builders, _name, _obj[_name]);
          }
        }
        break;
      case 2:
        var name = params[0],
            builder = params[1];

        addBuilder(this._builders, name, builder);
        break;
    }
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

var addBuilder = function addBuilder(_builders, name, builder) {
  // @TODO: invalid params
  if (typeof name != 'string' || typeof builder !== 'function') return;

  // @TODO: name exist
  //   this[name]

  _builders[name] = builder;
};