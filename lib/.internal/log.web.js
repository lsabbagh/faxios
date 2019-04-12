'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function logWeb(info, options) {
  if (!info) return;
  //log browser
  var l = console.log;
  var g = console.group;
  var ge = console.groupEnd;
  var gc = console.groupCollapsed;

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

  l('%c' + method.toUpperCase() + ' %c' + protocol + '%c' + host + '%c' + pathname, 'color:green;font-size:14px; font-weight:bold;', 'color:darkgreen;', 'color:blue;', 'color:red;');

  // headers
  if (info.headers) {
    g('Headers');
    for (key in info.headers) {
      l(key, ':', info.headers[key]);
    }ge();
  }

  // params
  if (info.params) {
    g('Params');
    for (key in info.params) {
      l(key, ':', info.params[key]);
    }ge();
  }

  gc('more...');
  l('');
  for (key in info) {
    var value = info[key];
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object') l(padder('%c' + key, 18) + ':  ' + ' %c' + value, 'color:blue; width:100px;', 'color:green;');else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') l(padder('%c' + key, 18) + ':  ', 'color:blue; width:100px;', value);
  }
  ge('more...');
}

exports.default = logWeb;


function _padder() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var length = arguments[1];
  var char = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '-';

  var result = value;
  for (var i = 0; i < length - value.length; i++) {
    result = char + result;
  }
  return result;
}