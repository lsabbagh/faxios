const faxios = require('../../../lib')
describe('alias', function () {
  it('alias(type, key, name)', function (done) {
    faxios()
      .build('base')
      .alias('param', 'postId') // <-- setting the alias
      .postId(1)
      .GET // => Promise
      .catch(error => error.response)
      .then(response => {
        done(response.config.params.postId == '1' ? false : 'postId(1) should add param of key postId=1')
      })
  })
})
