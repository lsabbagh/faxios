'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var axios = require('axios');

var log = require('./log');
var notify = require('./notify');

var fetch = function fetch(_, method, url, _config, data) {
  var key = _.key;

  var config = Object.assign({}, _.configuration, _config);
  config.data = data || config.data;
  config.url = url || config.url;
  config.method = method || config.method;

  var info = _extends({ key: key }, config, { loading: true });
  notify(_.listeners, info, 'before', 'change', 'info');

  var requester = axios.request(config).then(function (response) {
    var status = response.status,
        data = response.data;

    var info = _extends({ key: key }, config, { loading: false, response: response });
    notify(_.listeners, info, 'change', 'success', 'complete', status);
    log(info, _.configuration.log);
    return response;
  }).catch(function () {
    var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var info = _extends({ key: key }, config, { loading: false, error: error });
    var _error$response = error.response,
        response = _error$response === undefined ? {} : _error$response;

    notify(_.listeners, info, 'change', 'error', 'complete', response.status);
    log(info, _.configuration.log);
    return Promise.reject(error);
  });
  return requester;
};

module.exports = fetch;