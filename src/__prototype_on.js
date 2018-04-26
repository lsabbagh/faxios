function push(key, value) {
  if (types.array.includes(key) && typeof value == 'function') {
    if (!this.configuration[key]) this.configuration[key] = []
    this.configuration[key].push(value)
  }
  return this
}

function on(key, listener) {
  if (typeof listener == 'function') {
    if (!Array.isArray(this.listeners[key])) this.listeners[key] = []
    this.listeners[key].push(listener)
  }
  return this
}


const _ = {
  push,
  on,

  before: function (_listener) {
    return on.call(this, 'before', _listener)
  },
  change: function (_listener) {
    return on.call(this, 'change', _listener)
  },
  success: function (_listener) {
    return on.call(this, 'success', _listener)
  },
  error: function (_listener) {
    return on.call(this, 'error', _listener)
  },
  complete: function (_listener) {
    return on.call(this, 'complete', _listener)
  },

  
  onInformational: function (_listener) {
    return on.call(this, '1[0-9][0-9]', _listener)
  },
  on1XX: function (_listener) {
    return on.call(this, '1[0-9][0-9]', _listener)
  },


  onSuccess: function (_listener) {
    return on.call(this, '2[0-9][0-9]', _listener)
  },
  on2XX: function (_listener) {
    return on.call(this, '2[0-9][0-9]', _listener)
  },


  onRedirectional: function (_listener) {
    return on.call(this, '3[0-9][0-9]', _listener)
  },
  on3XX: function (_listener) {
    return on.call(this, '3[0-9][0-9]', _listener)
  },


  onClientError: function (_listener) {
    return on.call(this, '4[0-9][0-9]', _listener)
  },
  on4XX: function (_listener) {
    return on.call(this, '4[0-9][0-9]', _listener)
  },


  onServerError: function (_listener) {
    return on.call(this, '5[0-9][0-9]', _listener)
  },
  on5XX: function (_listener) {
    return on.call(this, '5[0-9][0-9]', _listener)
  },

}

module.exports = _