import addOrAppendTo from './.internal/add-or-append'

/**
 *
 * @param  {object|string|URLSearchParams} key key or object
 * @param  {string} [value] value
 * @returns {object} this
 */
function param(...args) {
  let urlsearchparams = typeof URLSearchParams != 'undefined'
  addOrAppendTo.call(this, 'params', urlsearchparams && URLSearchParams, ...args)
  return this
}

export default param
