// testing...
const faxios = require('../../lib')
describe('data', function () {
    it('data(key, value)', function (done) {
        faxios()
            .baseURL('http://jsonplaceholder.typicode.com')
            .url('/posts')
            .method('post')
            .header('Authorization', 'your_token')
            .param('postId', 1)
            .data('key1', 'value1') // could be any key or value
            .request()

            .then(res => {
                done(JSON.parse(res.config.data).key1 != 'value1')
            })
            .catch(err => done(err))
    });
});

