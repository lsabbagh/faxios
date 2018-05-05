const faxios =  require('./faxios')

const _builders = require('./builders')
const _middlewares = require('./middlewares')

module.exports = faxios

export default faxios

// exporting the builders
faxios.builders = _builders
export const builders = _builders

// exporting the middlewares
faxios.middlewares = _middlewares
export const middlewares = _middlewares

if (typeof window !== 'undefined') {
 window.faxios  = faxios
}

if (typeof global !== 'undefined') {
 global.faxios  = faxios
}
