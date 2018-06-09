module.exports = {
  _builders : {},
  add(name, builder){

    // @TODO: invalid params
    if(typeof name != 'string' ||  typeof builder !== 'function')  return

    // @TODO: name exist
    //   this[name]

    this._builders[name] = builder
  },

  get get() {
      return this._builders
  },

  build(instance, name) {
    if(this._builders[name]) {
      instance.use(this._builders[name])
    }
  }
}
