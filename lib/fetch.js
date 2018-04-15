'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var axios = require('axios');

var fetch = function fetch(_) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
  var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var _config = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var data = arguments[4];

  var config = _extends({ url: url }, _.configuration, _config);
  var key = _.key;

  if (data) config.data = data;

  var info = _extends({ key: key }, config, { loading: true });
  notify(_.listeners, info, 'before', 'info');

  return axios.request(config).then(function (response) {
    var info = _extends({ key: key }, config, { loading: false, response: response });
    var status = response.status;

    notify(_.listeners, info, 'change', 'success', 'complete', status);
    return response;
  }).catch(function () {
    var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var info = _extends({ key: key }, config, { loading: false, error: error });
    var _error$response = error.response,
        response = _error$response === undefined ? {} : _error$response;

    notify(_.listeners, info, 'change', 'error', 'complete', response.status);
    return Promise.reject(error);
  });
};

var notify = function notify(listeners, data) {
  for (var _len = arguments.length, events = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    events[_key - 2] = arguments[_key];
  }

  var keys = Object.keys(listeners);
  events.forEach(function (event) {
    if (!event) return;
    event = event + '';
    keys.forEach(function (key) {
      if (!key) return;
      key = key + '';
      if (event == key || event.match(key)) {
        listeners[key].forEach(function (listener) {
          return listener(data);
        });
      }
    });
  });
};

module.exports = fetch;