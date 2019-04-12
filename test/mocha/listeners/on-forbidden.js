// testing...

const faxios = require('../../../lib')
describe('onForbidden', function () {
  it('onForbidden', function (done) {
    let res = []
    faxios()
      .url('https://httpstat.us/403')
      .onInformational(() => done('onInformational!'))
      .onSuccess(() => done('onSuccess'))
      .onRedirectional(() => done('onRedirectional!'))
      .onClientError(() => res.push('onClientError'))
      .onForbidden(() => res.push('onForbidden'))
      .onServerError(() => done('onServerError'))
      .onError(() => res.push('onError'))
      .GET
      .then(res => {
        done('then!')
      })
      .catch(err => {
        if (res.length < 3) {
          done(res)
        } else {
          done()
        }
      })
  })
})
