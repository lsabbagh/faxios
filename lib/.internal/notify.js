'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 
 * @param {Array<Function>} listeners 
 * @param {object} data 
 * @param  {Array<any>} events 
 * @returns {object} this
 */
function notify(listeners, data) {
  var queries = Object.keys(listeners);

  for (var _len = arguments.length, events = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    events[_key - 2] = arguments[_key];
  }

  events.forEach(function (event) {
    if (!event) return;

    queries.forEach(function (query) {
      if (!query) return;

      if (event == query || typeof event == 'string' && event.match(query) || typeof query == 'string' && query.match(event) || (event + '').match(query) || (event + '').match(query + '')) {
        listeners[query].forEach(function (listener) {
          return listener(data);
        });
      }
    });
  });
  return this;
}

exports.default = notify;