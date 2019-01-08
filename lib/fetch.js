'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var axios = require('axios');

var log = require('./log');
var notify = require('./notify');
var get = require('lodash.get');

var delay = function delay(ms) {
  return new Promise(function (_) {
    return setTimeout(_, ms);
  });
};

var fetch = function fetch(_, method, url, _config, data) {
  var key = _.key;

  var config = Object.assign({}, _.configuration, _config);
  config.data = data || config.data;
  config.url = url || config.url;
  config.method = method || config.method || 'GET';

  _.configuration.uuid = Math.random();

  var requester = function requester() {
    var info = _extends({ key: key }, config, { loading: true });
    notify(_.listeners, info, 'before', 'change', 'info');

    return axios.request(config).then(function (response) {
      var _response = response,
          status = _response.status;

      if (config.in) {
        response = get(response, config.in);
      }
      var info = _extends({ key: key }, config, { loading: false, response: response });
      notify(_.listeners, info, 'change', 'success', 'complete', status);
      log(info, _.configuration.log);
      return response;
    }).catch(function () {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (error.response && config.in) {
        error.response = get(error.response, config.in);
      }
      var info = _extends({ key: key }, config, { loading: false, error: error });
      var _error$response = error.response,
          response = _error$response === undefined ? {} : _error$response;

      notify(_.listeners, info, 'change', 'error', 'complete', response.status);
      log(info, _.configuration.log);
      return Promise.reject(error);
    });
  };

  var uuid = _.configuration.uuid;

  return delay(_.configuration.debounce || _.configuration.delay).then(function () {
    var _$configuration = _.configuration,
        debounce = _$configuration.debounce,
        _uuid = _$configuration.uuid;

    if (debounce && uuid != _uuid) return Promise.reject('debounced');
    return requester();
  });
};

module.exports = fetch;