// testing...

const faxios = require('../../../lib')
describe('onInformational', function () {
  it('onInformational', function (done) {
    let onInformational; let error
    faxios()
      .onInformational(() => onInformational = true)
      .onSuccess(() => done('onSuccess!'))
      .onRedirectional(() => done('onRedirectional'))
      .onClientError(() => done('onClientError!'))
      .onServerError(() => done('onServerError!'))
      .onError(() => error = true)
      .get('http://www.mocky.io/v2/5ae17fd42d000050009d7c59')
      .then(res => {
        done('then!')
      })
      .catch(err => {
        if (!error) {
          done('!error')
        }
        if (!onInformational) {
          done('!_informational')
        }
        done()
      })
  })
})
