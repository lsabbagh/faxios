'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logWeb = require('./.internal/log.web.js');

var _logWeb2 = _interopRequireDefault(_logWeb);

var _logNode = require('./.internal/log.node.js');

var _logNode2 = _interopRequireDefault(_logNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function log(info, options) {
  if (!options) {
    return;
  }

  if (typeof window !== 'undefined') {
    (0, _logWeb2.default)(info, options);
  } else if (typeof module !== 'undefined' && module.exports) {
    (0, _logNode2.default)(info, options);
  }
}

exports.default = log;