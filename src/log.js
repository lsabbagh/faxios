import logWeb from './.internal/log.web.js'
import logNode from './.internal/log.node.js'

function log(info, options) {
  if (!options) {
    return
  }


  if (typeof window !== 'undefined') {
    logWeb(info, options)
  } else if (typeof module !== 'undefined' && module.exports) {
    logNode(info, options)
  }
}

export default log
