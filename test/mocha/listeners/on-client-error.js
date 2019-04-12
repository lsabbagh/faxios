// testing...
const faxios = require('../../../lib')
describe('onClientError', function () {
  it('onClientError', function (done) {
    let onClientError; let error
    faxios()
      .onInformational(() => done('onInformational!'))
      .onSuccess(() => done('onSuccess'))
      .onRedirectional(() => done('onRedirectional!'))
      .onClientError(() => onClientError = true)
      .onServerError(() => done('onServerError!'))
      .onError(() => (error = true))
      .get('http://www.mocky.io/v2/5ae17acc2d00004e009d7c31')
      .then(res => {
        done('then!')
      })
      .catch(err => {
        if (!error) {
          done('!error')
        }
        if (!onClientError) {
          done('!onClientError')
        }
        done()
      })
  })
})
