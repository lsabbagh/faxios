// testing...
const faxios = require('../../../lib')
describe('onServiceUnavailable', function () {
  it('onServiceUnavailable', function (done) {
    let res = []
    faxios()
      .baseURL('https://httpstat.us/503')
      .onInformational(() => done('onInformational!'))
      .onSuccess(() => done('onSuccess'))
      .onRedirectional(() => done('onRedirectional!'))
      .onClientError(() => done('onClientError'))
      .onServiceUnavailable(() => res.push('onServiceUnavailable'))
      .onServerError(() => res.push('onServerError'))
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
