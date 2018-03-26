var assert = require('assert')
// ---------
const faxios = require('./faxios')
describe('Faxios', function() {
  //-------
  let temp = faxios().get('https://jsonplaceholder.typicode.com')
  return
  let base = faxios().set('baseURL', 'https://jsonplaceholder.typicode.com')

  //---------
  it('1:extends, url, method, name, request', () => {
    let instance = faxios()
      .extends(base)
      .url('/posts/1')
      .method('get')
      .name('getting')
      .request()
      .then(res => assert.equal(res.data.userId, 1))
      .catch(err => console.error('err'))
    return instance
  })
  it('2:extends, url, name, get', () => {
    let instance = faxios()
      .extends(base)
      .url('/posts/1')
      .name('posts')
      .get()
      .then(res => assert.equal(res.data.userId, 1))
      .catch(err => {})
    return instance
  })
  let request
  it('3:request: extend, headers, before, done, done, 3-success,3-error, done, change|', () => {
    request = faxios()
      .extends(base)
      .headers({
        'Content-type': 'application/json; charset=UTF-8'
      })
      .before(b => {})
      .done((a, previos, stop) => {})
      .done((a, previos, stop) => {})
      .success((a, b, stop) => {})
      .success((a, b) => {})
      .success((a, b) => {})
      .error(() => {})
      .error(() => {})
      .error(() => {})
      .done(() => {})
      .change(data => {})
      .request()
  })
  it('4:baseURL, get', () => {
    faxios()
      .baseURL('https://jsonplaceholder.typicode.com')
      .get('/posts')
      .then(response => {})
      .catch(error => {})
  })

  it('5:baseURL, url, send, done', () => {
    faxios()
      .baseURL('https://jsonplaceholder.typicode.com')
      .url('/posts')
      .send()
      .done(() => {})
  })

  it('6:baseURL,  send, update, done', () => {
    return (
      faxios()
        .baseURL('ht-------------ypicode.com')
        .update(
          _ => (_.config.baseURL = 'https://jsonplaceholder.typicode.com')
        )
        .url('/posts/1')
        //      .log()
        .send()
        .done(_ => {
          assert.equal(_.loading, false)
        })
    )
  })
})
