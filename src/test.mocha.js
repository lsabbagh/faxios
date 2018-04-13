// testing...
const faxios = require('../lib/faxios')
describe('Basics', function () {

    this.timeout(10000)

    describe('#get', function () {
        it('.get(full_url_)', function (done) {
            faxios()
                .get('https://jsonplaceholder.typicode.com/posts/1/comments')
                .then(res => {
                    done()
                })
                .catch(err => {
                    done('failed')
                })
        });
    });

    describe('#baseUrl', function () {
        it('.baseUrl(domain)', function (done) {
            faxios()
                .baseURL('http://jsonplaceholder.typicode.com')
                .get('/posts/1/comments') // => Promise
                .then(res => done())
                .catch(err => done(err))
        });
    });

    describe('#url', function () {
        it('.url(path)', function (done) {
            faxios()
                .baseURL('http://jsonplaceholder.typicode.com')
                .url('/posts/1/comments')
                .get() // => Promise
                .then(res => done())
                .catch(err => done(err))
        });
    });

    describe('#method', function () {
        it('.method(METOD_NAME)', function (done) {
            faxios()
                .baseURL('http://jsonplaceholder.typicode.com')
                .url('/posts/1/comments')
                .method('get')
                .get() // => Promise 
                .then(res => done())
                .catch(err => done(err))
        });
    });


    describe('#param', function () {
        it('.param(key, value)', function (done) {
            faxios()
                .baseURL('http://jsonplaceholder.typicode.com')
                .url('posts')
                .method('get')
                .request() // => Promise
                .then(res => done())
                .catch(err => done(err))
        });
    });

    describe('#header', function () {
        it('.header(key, value)', function (done) {
            faxios()
                .baseURL('http://jsonplaceholder.typicode.com')
                .url('posts')
                .method('get')
                .param('postId', 1)
                .header('Authorization', 'your_token')
                .request() // => Promise

                .then(res => done())
                .catch(err => done(err))
        });
    });

    describe('#data', function () {
        it('.data(key, value)', function (done) {
            faxios()
                .baseURL('http://jsonplaceholder.typicode.com')
                .url('/posts')
                .method('post')
                .header('Authorization', 'your_token')
                .param('postId', 1)
                .data('key1', 'value1') // could be any key or value
                .data('key2', 'value2') // could be any key or value
                .data('key3', 'value3') // could be any key or value
                .request() // => Promise

                .then(res => {
                    done(JSON.parse(res.config.data).key1 != 'value1')
                })
                .catch(err => done(err))
        });
    });


    describe('#alias', function () {
        it('.alias(type, key, name)', function (done) {
            faxios()
                .baseURL('http://jsonplaceholder.typicode.com')
                .alias('param', 'postId') // <-- setting the alias
                .postId(1)
                .request() // => Promise

                .then(res => {
                    done(res.config.params.postId == '1' ? false : 'postId(1) should add param of key postId=1')
                })
                .catch(err => done(err))
        });
    });


    describe('#use', function () {
        it('.use(middleware)', function (done) {
            
            // base middleware
            let base = fax => fax
                .baseURL('http://jsonplaceholder.typicode.com')
                .header('Content-Type', 'text/html')

            faxios()
                .use(base)
                .url('/posts')
                .request() // => Promise

                .then(res => {
                    done()
                })
                .catch(err => done(err))
        });
    });



});