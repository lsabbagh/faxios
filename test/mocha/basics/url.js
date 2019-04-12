// testing...
const faxios = require('../../../lib')
describe('url', () => {
  it('url(path)', function (done) {
    faxios()
      .baseURL('http://jsonplaceholder.typicode.com')
      .url('/posts/1/comments')
      .get() // => Promise
      .then(res => done())
      .catch(err => done(err))
  })
    it('url(path).GET', function (done) {
    faxios()
      .baseURL('http://jsonplaceholder.typicode.com')
      .url('/posts/1/comments')
      .GET
      .then(res => done())
      .catch(err => done(err))
  })
    it('.url(path).then', function (done) {
    faxios()
      .baseURL('http://jsonplaceholder.typicode.com/posts/1/comments')
      .post()
      .then(res => done())
      .catch(err => done(err))
  })
})
