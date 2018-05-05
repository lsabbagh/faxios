//const cTable = require('console.table')
const __url = require('url')

module.exports = (info, options) => {
  if(!options) return


  if (typeof window !== 'undefined') {
    //log browser
    const l = console.log
    const g = console.group
    const ge = console.groupEnd
    const cg = console.collapsedGroup

    let {method = '', baseURL = '', url = '', responseType = ''} = info

    let {protocol='', host='', pathname=''} = __url.parse(baseURL + url)
    l(`%c${method.toUpperCase()} %c${protocol}%c${host}%c${pathname}`, 'color:green;font-size:14px; font-weight:bold;', 'color:darkgreen;', 'color:blue;', 'color:red;')

    // info
    if(info) {
      g('Info')
      for(key in info) {
        let value = info[key]
        if('function' != typeof value && 'object' != typeof value) {
          l(padder('%c'+key, 18) +':  ' +' %c'+value, 'color:blue; width:100px;', 'color:red;')
        }
      }
      ge()
    }
    // headers
    if(info.headers) {
      g('Headers')
      for(key in info.headers) {
        l(key, ':', info.headers[key])
      }
      ge()
    }

    // params
    if(info.params) {
      g('Params')
      for(key in info.headers) {
        l(key, ':', info.headers[key])
      }
      ge()
    }

  } else if (typeof module !== 'undefined' && module.exports){
    // log node

    const log = (...params) => console.log(...params, Reset)

    let {method, baseURL, url} = info

    log('\n', sep, sep)
    log('method  :    ', method)
    log('baseURL  :    ', baseURL)
    log('url      :    ', url)

    log('\n')
    log(Bg.Blue, Fg.White, '      Headers:')
    Object.keys(info.headers).forEach(_=> {
      log(Fg.Green, ('                        ' + _) .slice(-25), ' : ', Fg.Blue, info.headers[_],)
    })

    log('\n')
    log(Bg.Green, Fg.White, '      Headers:')
    Object.keys(info.params).forEach(_=> {
      log(Fg.Red, ('                        ' + _) .slice(-25), ' : ', Fg.Blue, info.params[_],)
    })

    log(sep, sep, '\n')
  }

}

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

const padder = (value = '', length, char = '-') =>  {
  let result = value
  for(let i = 0; i < length - value.length; i++){
    result = char + result
  }
  return result
}
