// testing...
const faxios = require('../../../lib')
describe('in', function () {
  it('in(path)', function (done) {
    faxios()
      .baseURL('http://jsonplaceholder.typicode.com')
      .url('/posts')
      .method('post')
      .header('Authorization', 'your_token')
      .param('postId', 1)
      .data('key1', 'value1') // could be any key or value

      .in('config')

      .request()

      .then(config => {
        done(JSON.parse(config.data).key1 != 'value1')
      })
      .catch(err => done(err))
  })
})

