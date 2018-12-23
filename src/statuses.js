module.exports = {
  getCodeByText: function(text) {

  },
  getTextByCode: function(code) {

  },
  fix: function(query) {
    if(typeof query == 'string') {
      query = query
      .replace(/\s/g, '')
      .toLowerCase()
      return BY_TEXT[query] || query
    }
    return query

  }

}
const BY_KEY={

}

const BY_TEXT={
'continue':100,
'switchingprotocols':101,
'ok':200,
'created':201,
'accepted':202,
'nonauthoritativeinformation':203,
'nocontent':204,
'resetcontent':205,
'partialcontent':206,
'multiplechoices':300,
'movedpermanently':301,
'found':302,
'seeother':303,
'notmodified':304,
'useproxy':305,
'temporaryredirect':307,
'badrequest':400,
'unauthorized':401,
'paymentrequired':402,
'forbidden':403,
'notfound':404,
'methodnotallowed':405,
'notacceptable':406,
'proxyauthenticationrequired':407,
'requesttime-out':408,
'conflict':409,
'gone':410,
'lengthrequired':411,
'preconditionfailed':412,
'requestentitytoolarge':413,
'request-uritoolarge':414,
'unsupportedmediatype':415,
'requestedrangenotsatisfiable':416,
'expectationfailed':417,
'internalservererror':500,
'notimplemented':501,
'badgateway':502,
'serviceunavailable':503,
'gatewaytimeout':504,
'httpversionnotsupported':505,
}