module.exports = {
  _builders : {},
  add(...params){
    switch(params.length) {
      case 1:
      let [_obj] = params
      if(typeof _obj == 'object') {
        for(let name in _obj) {
          addBuilder(this._builders, name, _obj[name])
        }
      }
      break;
      case 2:
      let [name, builder] = params
      addBuilder(this._builders, name, builder)
      break;
    }
  },

  get get() {
    return this._builders
  },

  build(instance, name) {
    if(this._builders[name]) {
      instance.build(this._builders[name])
    }
  }
}

const addBuilder = (_builders, name, builder) => {
  // @TODO: invalid params
  if(typeof name != 'string' ||  typeof builder !== 'function')  return

  // @TODO: name exist
  //   this[name]

  _builders[name] = builder
}
