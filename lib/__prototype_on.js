'use strict';

function push(key, value) {
  if (types.array.includes(key) && typeof value == 'function') {
    if (!this.configuration[key]) this.configuration[key] = [];
    this.configuration[key].push(value);
  }
  return this;
}

function on(key, listener) {
  if (typeof listener == 'function') {
    if (!Array.isArray(this.listeners[key])) this.listeners[key] = [];
    this.listeners[key].push(listener);
  }
  return this;
}

var _ = {
  push: push,
  on: on,

  before: function before(_listener) {
    return on.call(this, 'before', _listener);
  },
  change: function change(_listener) {
    return on.call(this, 'change', _listener);
  },
  success: function success(_listener) {
    return on.call(this, 'success', _listener);
  },
  error: function error(_listener) {
    return on.call(this, 'error', _listener);
  },
  complete: function complete(_listener) {
    return on.call(this, 'complete', _listener);
  },

  onInformational: function onInformational(_listener) {
    return on.call(this, '1[0-9][0-9]', _listener);
  },
  on1XX: function on1XX(_listener) {
    return on.call(this, '1[0-9][0-9]', _listener);
  },

  onSuccess: function onSuccess(_listener) {
    return on.call(this, '2[0-9][0-9]', _listener);
  },
  on2XX: function on2XX(_listener) {
    return on.call(this, '2[0-9][0-9]', _listener);
  },

  onRedirectional: function onRedirectional(_listener) {
    return on.call(this, '3[0-9][0-9]', _listener);
  },
  on3XX: function on3XX(_listener) {
    return on.call(this, '3[0-9][0-9]', _listener);
  },

  onClientError: function onClientError(_listener) {
    return on.call(this, '4[0-9][0-9]', _listener);
  },
  on4XX: function on4XX(_listener) {
    return on.call(this, '4[0-9][0-9]', _listener);
  },

  onServerError: function onServerError(_listener) {
    return on.call(this, '5[0-9][0-9]', _listener);
  },
  on5XX: function on5XX(_listener) {
    return on.call(this, '5[0-9][0-9]', _listener);
  }

};

module.exports = _;