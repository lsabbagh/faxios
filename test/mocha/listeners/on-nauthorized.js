// testing...
const faxios = require('../../../lib')
describe('onUnauthorized', function () {
  it('onUnauthorized', function (done) {
    let res = []
    faxios()
      .baseURL('https://httpstat.us/401')
      .onInformational(() => done('onInformational!'))
      .onSuccess(() => done('onSuccess'))
      .onRedirectional(() => done('onRedirectional!'))
      .onClientError(() => res.push('onClientError'))
      .onUnauthorized(() => res.push('onUnauthorized'))
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
