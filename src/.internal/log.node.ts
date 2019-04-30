import {URL} from 'url'

function logNode(info, options) {
    //log browser
    const l = console.log

    let {method = '', baseURL = '', url = '', responseType = ''} = info

    let {protocol='', host='', pathname=''} = new URL(baseURL + url)
    l('\n')
    l(Fg.Green, method.toUpperCase(), Bright, Fg.Green, protocol, Reset, Fg.Blue, host, Fg.Red,pathname, Reset)

    // headers
    if(info.headers) {
      l('\n')
      l(Fg.Blue, Underscore, padder('Headers', 18, ' '), Reset)
      for(let key in info.headers) l(Fg.Green, padder(key, 18, ' '), ':', Fg.Blue, info.headers[key], Reset)
    }

    // params
    if(info.params) {
      l('\n')
      l(Fg.Blue, Underscore, padder('Params', 18, ' '), Reset)
      for(let key in info.params) l(Fg.Green, padder(key, 18, ' '), ':', Fg.Blue, info.params[key], Reset)
    }

    for(let key in info) {
      let value = info[key]
      //if (typeof value == 'string') l(padder(key, 18) +':  ' + ' '+value)
    }
    l('\n\n')
}

export default logNode

const sep = '---------------'
const Reset = "\x1b[0m"
const Bright = "\x1b[1m"
const Dim = "\x1b[2m"
const Underscore = "\x1b[4m"
const Blink = "\x1b[5m"
const Reverse = "\x1b[7m"
const Hidden = "\x1b[8m"

const Fg = {
  Black : "\x1b[30m"
  ,Red : "\x1b[31m"
  ,Green : "\x1b[32m"
  ,Yellow : "\x1b[33m"
  ,Blue : "\x1b[34m"
  ,Magenta : "\x1b[35m"
  ,Cyan : "\x1b[36m"
  ,White : "\x1b[37m"
}

const Bg = {
  Black : "\x1b[40m"
  ,Red : "\x1b[41m"
  ,Green : "\x1b[42m"
  ,Yellow : "\x1b[43m"
  ,Blue : "\x1b[44m"
  ,Magenta : "\x1b[45m"
  ,Cyan : "\x1b[46m"
  ,White : "\x1b[47m"
}

function padder(value = '', length, char = '-')  {
  let result = value
  for(let i = 0; i < length - value.length; i++){
    result = char + result
  }
  return result
}
