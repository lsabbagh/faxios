const faxios =  require('./faxios')

module.exports = faxios

export default faxios

if (window) window.faxios  = faxios
