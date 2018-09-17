const logWeb = require('./log.web.js')
const logNode = require('./log.node.js')

module.exports = (info, options) => {
  if (!options) return


  if (typeof window !== 'undefined') {
    logWeb(info, options)
  } else if (typeof module !== 'undefined' && module.exports) {
    logNode(info, options)
  }
}
