// testing...

const faxios = require('../../../lib')
describe('onBadRequest', function () {
  it('onBadRequest', function (done) {
    let res = []
    faxios()
      .url('https://httpstat.us/400')
      .onInformational(() => done('onInformational!'))
      .onSuccess(() => done('onSuccess'))
      .onRedirectional(() => done('onRedirectional!'))
      .onClientError(() => res.push('onClientError'))
      .onBadRequest(() => res.push('onBadRequest'))
      .onServerError(() => done('onServerError'))
      .onError(() => res.push('onError'))
      .on(400, () => res.push('400'))
      .GET
      .then(() => {
        done('success!')
      })
      .catch(err => {
        let status = err.response.status
        if (status == 400 && res.length == 4) {
          done()
        } else {
          done('on bad request')
        }
      })
  })
})
