'use strict';

var _require = require('url'),
    URL = _require.URL;

module.exports = function (info, options) {
  //log browser
  var l = console.log;

  var _info$method = info.method,
      method = _info$method === undefined ? '' : _info$method,
      _info$baseURL = info.baseURL,
      baseURL = _info$baseURL === undefined ? '' : _info$baseURL,
      _info$url = info.url,
      url = _info$url === undefined ? '' : _info$url,
      _info$responseType = info.responseType,
      responseType = _info$responseType === undefined ? '' : _info$responseType;

  var _ref = new URL(baseURL + url),
      _ref$protocol = _ref.protocol,
      protocol = _ref$protocol === undefined ? '' : _ref$protocol,
      _ref$host = _ref.host,
      host = _ref$host === undefined ? '' : _ref$host,
      _ref$pathname = _ref.pathname,
      pathname = _ref$pathname === undefined ? '' : _ref$pathname;

  l('\n');
  l(Fg.Green, method.toUpperCase(), Bright, Fg.Green, protocol, Reset, Fg.Blue, host, Fg.Red, pathname, Reset);

  // headers
  if (info.headers) {
    l('\n');
    l(Fg.Blue, Underscore, padder('Headers', 18, ' '), Reset);
    for (var key in info.headers) {
      l(Fg.Green, padder(key, 18, ' '), ':', Fg.Blue, info.headers[key], Reset);
    }
  }

  // params
  if (info.params) {
    l('\n');
    l(Fg.Blue, Underscore, padder('Params', 18, ' '), Reset);
    for (var _key in info.params) {
      l(Fg.Green, padder(_key, 18, ' '), ':', Fg.Blue, info.params[_key], Reset);
    }
  }

  for (var _key2 in info) {
    var value = info[_key2];
    //if (typeof value == 'string') l(padder(key, 18) +':  ' + ' '+value)
  }
  l('\n\n');
};

var sep = '---------------';
var Reset = "\x1b[0m";
var Bright = "\x1b[1m";
var Dim = "\x1b[2m";
var Underscore = "\x1b[4m";
var Blink = "\x1b[5m";
var Reverse = "\x1b[7m";
var Hidden = "\x1b[8m";

var Fg = {
  Black: "\x1b[30m",
  Red: "\x1b[31m",
  Green: "\x1b[32m",
  Yellow: "\x1b[33m",
  Blue: "\x1b[34m",
  Magenta: "\x1b[35m",
  Cyan: "\x1b[36m",
  White: "\x1b[37m"
};

var Bg = {
  Black: "\x1b[40m",
  Red: "\x1b[41m",
  Green: "\x1b[42m",
  Yellow: "\x1b[43m",
  Blue: "\x1b[44m",
  Magenta: "\x1b[45m",
  Cyan: "\x1b[46m",
  White: "\x1b[47m"
};

var padder = function padder() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var length = arguments[1];
  var char = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '-';

  var result = value;
  for (var i = 0; i < length - value.length; i++) {
    result = char + result;
  }
  return result;
};