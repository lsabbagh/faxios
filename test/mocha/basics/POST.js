const faxios = require('../../../lib')

describe('POST', () =>
  it('faxios(full_url)', done => {
    faxios('https://jsonplaceholder.typicode.com/posts/1/comments')
      .POST
      .then(response => {
        done()
      })
      .catch(error => {
        done(error)
      })
  }
  )
)
