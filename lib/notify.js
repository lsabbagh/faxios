'use strict';

module.exports = function (listeners, data) {
  for (var _len = arguments.length, events = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    events[_key - 2] = arguments[_key];
  }

  var queries = Object.keys(listeners);
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
};