const faxios = require('../../../lib')
describe('method', () => {
  it('method(METOD_NAME)', done => {
    faxios()
      .baseURL('http://jsonplaceholder.typicode.com')
      .url('/posts/1/comments')
      .method('get')
      .get() // => Promise
      .then(res => done())
      .catch(err => done(err))
  })
})
