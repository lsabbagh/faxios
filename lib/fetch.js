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
  notify(_.listeners.before, info);
  notify(_.listeners.change, info);

  return axios.request(config).then(function (response) {
    var info = _extends({ key: key }, config, { loading: false, response: response });
    notify(_.listeners.change, info);
    notify(_.listeners.success, info);
    notify(_.listeners.done, info);
    return response;
  }).catch(function (error) {
    var info = _extends({ key: key }, config, { loading: false, error: error });
    notify(_.listeners.change, info);
    notify(_.listeners.error, info);
    notify(_.listeners.done, info);
    return Promise.reject(error);
  });
};

var notify = function notify(listeners, data) {
  listeners.forEach(function (_listener) {
    return _listener(data);
  });
};

module.exports = fetch;