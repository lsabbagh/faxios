/**
 * 
 * @param {Array<Function>} listeners 
 * @param {object} data 
 * @param  {Array<any>} events 
 * @returns {object} this
 */
 function notify(listeners, data, ...events) {
  let queries = Object.keys(listeners)
  events.forEach(event => {
    if(!event) return

    queries.forEach(query => {
      if(!query) return

      if(event == query ||
         (typeof event == 'string' && event.match(query)) ||
         (typeof query == 'string' && query.match(event)) ||
         (event +'').match(query) ||
         (event +'').match(query + '')
        ) {
           listeners[query].forEach(listener => listener(data))
      }
    })
  })
  return this
}

export default notify