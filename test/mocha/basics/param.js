// testing...
const faxios = require('../../../lib')
describe('param', function () {
  it('param(key, value)', function (done) {
    faxios()
      .baseURL('http://jsonplaceholder.typicode.com')
      .url('posts')
      .param('id', 1)
      .GET
      .then(res => done())
      .catch(err => done(err))
  })
})
