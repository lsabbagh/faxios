// testing...
const faxios = require('../../lib')
describe('build', function () {
    it('build(middleware)', function (done) {

        // base middleware
        let base = fax => fax
            .baseURL('http://jsonplaceholder.typicode.com')
            .header('Content-Type', 'text/html')

        faxios()
            .build(base)
            .url('/posts')
            .GET
            .then(res => {
                done()
            })
            .catch(err => done(err))
    });
});
