// testing...
const faxios = require('../../../lib')
describe('on', function () {
  it('on', function (done) {
    let res = []
    faxios()
      .url('https://httpstat.us/410')
      .onInformational(() => done('onInformational!'))
      .onSuccess(() => done('onSuccess'))
      .onRedirectional(() => done('onRedirectional!'))
      .onClientError(() => res.push('onClientError'))
      .onBadRequest(() => done('onBadRequest'))
      .onServerError(() => done('onServerError'))
      .onError(() => res.push('onError'))
      .on('gone', () => res.push('gone'))
      .on(400, () => res.push('400'))
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
