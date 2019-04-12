// testing...
const faxios = require('../../../lib')
describe('clear', function () {
  it('clear(params, key)', function (done) {
    faxios()
      .baseURL('http://jsonplaceholder.typicode.com')
      .url('/posts')

      .param('foo', 'bar')

      .clear('params', 'foo')

      .onBefore(_ => {
        done(_.params.foo)
      })

      .FETCH
  })

  it('clear(params)', function (done) {
    faxios()
      .baseURL('http://jsonplaceholder.typicode.com')
      .url('/posts')

      .param('foo', 'bar')

      .clear('params')

      .onBefore(_ => {
        done(_.params)
      })

      .FETCH
  })
})

