// testing...
const faxios = require('../../../lib')

describe('onInternalServerError', function () {
  it('onInternalServerError', function (done) {
    let res = []
    faxios()
      .baseURL('https://httpstat.us/500')
      .onInformational(() => done('onInformational!'))
      .onSuccess(() => done('onSuccess'))
      .onRedirectional(() => done('onRedirectional!'))
      .onClientError(() => done('onClientError'))
      .onInternalServerError(() => res.push('onInternalServerError'))
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
