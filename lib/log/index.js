'use strict';

var __url = require('url');

var logWeb = require('./log.web.js');
var logNode = require('./log.node.js');

module.exports = function (info, options) {
  if (!options) return;

  if (typeof window !== 'undefined') {
    logWeb(info, options);
  } else if (typeof module !== 'undefined' && module.exports) {
    logNode(info, options);
  }
};