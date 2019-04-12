// testing...
const faxios = require('../../../lib')
describe('log', function () {
  it('log(options)', function (done) {
    faxios()
      .baseURL('http://jsonplaceholder.typicode.com')
      .url('posts')
      .param('name', 'wassim')
      .param('fname', 'lsabbagh')
      .param('bd', '1991')
      .Authorization('testing')
      .header('language', 'en')
      .log(true)
      .GET
      .then(res => done())
      .catch(err => done(err))
  })
})
