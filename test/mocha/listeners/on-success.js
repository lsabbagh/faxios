// testing...
const faxios = require('../../../lib')
describe('onSuccess', function () {
  it('onSuccess', function (done) {
    let onSuccess
    faxios()
      .onInformational(() => done('onInformational!'))
      .onSuccess(() => (onSuccess = true))
      .onRedirectional(() => done('onRedirectional'))
      .onClientError(() => done('onClientError!'))
      .onServerError(() => done('onServerError!'))
      .get('http://www.mocky.io/v2/5ae199cb2d000055009d7ceb')
      .then(res => {
        if (!onSuccess) {
          done('!onSuccess')
        }
        done()
      })
      .catch(err => {
        done('catch!')
      })
  })
})
