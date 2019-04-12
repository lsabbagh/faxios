import faxios from './.internal/faxios'

import _builders from './.internal/builders'

module.exports = faxios

export default faxios

// exporting the builders
faxios.builders = _builders

if (typeof window !== 'undefined') {
  window.faxios = faxios
}

if (typeof global !== 'undefined') {
  global.faxios = faxios
}
