export default {
  add: function(name, builder){

    // @TODO: invalid params
    if(typeof name == 'string' ||  typeof builder !== 'function')  return

    // @TODO: name exist
    //   this[name]

    this[name] = builder
  },

  build: function(instance, name) {
    if(this[name]) instance.use(this[name])
  }
}
