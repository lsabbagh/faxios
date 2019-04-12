// testing...
const faxios = require('../../../lib')
describe('onServerError', function () {
  it('onServerError', function (done) {
    let onServerError; let error
    faxios()
      .onInformational(() => done('onInformational!'))
      .onSuccess(() => done('onSuccess'))
      .onRedirectional(() => done('onRedirectional!'))
      .onClientError(() => done('onClientError'))
      .onServerError(() => (onServerError = true))
      .onError(() => (error = true))
      .get('http://www.mocky.io/v2/5ae235012d00004f009d8082')
      .then(res => {
        done('then!')
      })
      .catch(err => {
        if (!error) {
          done('!error')
        }
        if (!onServerError) {
          done('!onServerError')
        }
        done()
      })
  })
})
