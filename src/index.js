const faxios =  require('./faxios')

const _builders = require('./builders')

module.exports = faxios

export default faxios

// exporting the builders
faxios.builders = _builders
export const builders = _builders

if (typeof window !== 'undefined') {
 window.faxios  = faxios
}

if (typeof global !== 'undefined') {
 global.faxios  = faxios
}
