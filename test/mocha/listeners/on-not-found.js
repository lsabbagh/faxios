// testing...
const faxios = require('../../../lib')
describe('onNotFound', function () {
  it('onNotFound', function (done) {
    let res = []
    faxios()
      .url('https://httpstat.us/404')
      .onInformational(() => done('onInformational!'))
      .onSuccess(() => done('onSuccess'))
      .onRedirectional(() => done('onRedirectional!'))
      .onClientError(() => res.push('onClientError'))
      .onNotFound(() => res.push('onNotFound'))
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
