function logWeb(info, options) {
  if (!info) return
  //log browser
  const l = console.log
  const g = console.group
  const ge = console.groupEnd
  const gc = console.groupCollapsed

  let {method = '', baseURL = '', url = '', responseType = ''} = info

  let {protocol='', host='', pathname=''} = new URL(baseURL + url)
  l(`%c${method.toUpperCase()} %c${protocol}%c${host}%c${pathname}`,
  'color:green;font-size:14px; font-weight:bold;',
  'color:darkgreen;',
  'color:blue;',
  'color:red;')

  // headers
  if(info.headers) {
    g('Headers')
    for(key in info.headers) l(key, ':', info.headers[key])
    ge()
  }

  // params
  if(info.params) {
    g('Params')
    for(key in info.params) l(key, ':', info.params[key])
    ge()
  }

  gc('more...')
  l('')
  for(key in info) {
    let value = info[key]
    if (typeof value != 'object') l(padder('%c'+key, 18) +':  ' + ' %c'+value, 'color:blue; width:100px;', 'color:green;')
    else if (typeof value == 'object') l(padder('%c'+key, 18) + ':  ' , 'color:blue; width:100px;', value)
  }
  ge('more...')
}

export default logWeb

function _padder (value = '', length, char = '-') {
  let result = value
  for(let i = 0; i < length - value.length; i++){
    result = char + result
  }
  return result
}
