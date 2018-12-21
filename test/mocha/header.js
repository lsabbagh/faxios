// testing...
const faxios = require('../../lib')
describe('header', function () {
    it('header(key, value)', function (done) {
        faxios()
            .baseURL('http://jsonplaceholder.typicode.com')
            .url('posts')
            .method('get')
            .param('postId', 1)
            .header('Authorization', 'your_token')

            .GET

            .then(res => done())
            .catch(err => done(err))
    });
    it('headers aliases', function (done) {
        faxios()
            .baseURL('http://jsonplaceholder.typicode.com')
            .url('posts')
            .method('get')
            .param('postId', 1)
            .Authorization('your_token')
            .GET

            .then(res => done())
            .catch(err => done(err))
    });
});