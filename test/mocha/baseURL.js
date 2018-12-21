// testing...
const faxios = require('../../lib')
describe('baseUrl', () => {
    it('baseUrl(domain)', function (done) {
        faxios()
            .baseURL('http://jsonplaceholder.typicode.com')
            .get('/posts/1/comments') // => Promise
            .then(res => done())
            .catch(err => done(err))
    });
});