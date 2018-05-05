'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//const cTable = require('console.table')
var __url = require('url');

module.exports = function (info, options) {
  if (!options) return;

  if (typeof window !== 'undefined') {
    //log browser
    var l = console.log;
    var g = console.group;
    var ge = console.groupEnd;
    var cg = console.collapsedGroup;

    var _info$method = info.method,
        method = _info$method === undefined ? '' : _info$method,
        _info$baseURL = info.baseURL,
        baseURL = _info$baseURL === undefined ? '' : _info$baseURL,
        _info$url = info.url,
        url = _info$url === undefined ? '' : _info$url,
        _info$responseType = info.responseType,
        responseType = _info$responseType === undefined ? '' : _info$responseType;

    var _url$parse = __url.parse(baseURL + url),
        _url$parse$protocol = _url$parse.protocol,
        protocol = _url$parse$protocol === undefined ? '' : _url$parse$protocol,
        _url$parse$host = _url$parse.host,
        host = _url$parse$host === undefined ? '' : _url$parse$host,
        _url$parse$pathname = _url$parse.pathname,
        pathname = _url$parse$pathname === undefined ? '' : _url$parse$pathname;

    l('%c' + method.toUpperCase() + ' %c' + protocol + '%c' + host + '%c' + pathname, 'color:green;font-size:14px; font-weight:bold;', 'color:darkgreen;', 'color:blue;', 'color:red;');

    // info
    if (info) {
      g('Info');
      for (key in info) {
        var value = info[key];
        if ('function' != typeof value && 'object' != (typeof value === 'undefined' ? 'undefined' : _typeof(value))) {
          l(padder('%c' + key, 18) + ':  ' + ' %c' + value, 'color:blue; width:100px;', 'color:red;');
        }
      }
      ge();
    }
    // headers
    if (info.headers) {
      g('Headers');
      for (key in info.headers) {
        l(key, ':', info.headers[key]);
      }
      ge();
    }

    // params
    if (info.params) {
      g('Params');
      for (key in info.headers) {
        l(key, ':', info.headers[key]);
      }
      ge();
    }
  } else if (typeof module !== 'undefined' && module.exports) {
    // log node

    var log = function log() {
      var _console;

      for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      return (_console = console).log.apply(_console, params.concat([Reset]));
    };

    var _method = info.method,
        _baseURL = info.baseURL,
        _url = info.url;


    log('\n', sep, sep);
    log('method  :    ', _method);
    log('baseURL  :    ', _baseURL);
    log('url      :    ', _url);

    log('\n');
    log(Bg.Blue, Fg.White, '      Headers:');
    Object.keys(info.headers).forEach(function (_) {
      log(Fg.Green, ('                        ' + _).slice(-25), ' : ', Fg.Blue, info.headers[_]);
    });

    log('\n');
    log(Bg.Green, Fg.White, '      Headers:');
    Object.keys(info.params).forEach(function (_) {
      log(Fg.Red, ('                        ' + _).slice(-25), ' : ', Fg.Blue, info.params[_]);
    });

    log(sep, sep, '\n');
  }
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