module.exports = {
  any: [
    'url',
    'method',
    'baseURL',
    'paramsSerializer',
    'timeout',
    'withCredentials',
    'adapter',
    'responseType',
    'responseEncoding',
    'xsrfCookieName',
    'xsrfHeaderName',
    'onUploadProgress',
    'onDownloadProgress',
    'maxContentLength',
    'maxContentLength',
    'validateStatus',
    'maxRedirects',
    'socketPath',
    'httpAgent',
    'httpsAgent'
  ],
  object: ['headers', 'params', 'data', 'auth', 'proxy'],
  array: ['transformResponse', 'transformRequest']
}
