// testing...
const faxios = require('../../../lib')

describe('onRedirectional', function () {
  it('onRedirectional', function (done) {
    let onRedirectional; let error
    faxios()
      .onInformational(() => done('onInformational!'))
      .onSuccess(() => done('onSuccess'))
      .onRedirectional(() => (onRedirectional = true))
      .onClientError(() => done('onClientError!'))
      .onServerError(() => done('onServerError!'))
      .onError(() => (error = true))
      .get('http://www.mocky.io/v2/5ae17c212d00005d009d7c36')
      .then(res => {
        done('then!')
      })
      .catch(err => {
        if (!error) {
          done('!error')
        }
        if (!onRedirectional) {
          done('!onRedirectional')
        }
        done()
      })
  })
})
