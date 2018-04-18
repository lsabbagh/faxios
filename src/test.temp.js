// testing...
const faxios = require('../lib/faxios')
describe('Basics', function () {

    this.timeout(10000)

    describe('#on', function () {
        it('.on(event, function)', function (done) {
            faxios()
                .on('complete', () => console.log('complete:'))
                .on('success', () => console.log('success:'))
                .on('error', () => console.log('error:'))
                .on('before', () => console.log('before:'))
                .on('change', () => console.log('change:'))
                .on(/20+/, () => console.log('/200/'))
                .on('2..', () => console.log('2xx'))
                .on(404,  () => console.log('404'))
                .get('https://jsonplaceholder.typicode.com/posts/1/comments')
                .then(res => {
                    done()
                })
                .catch(err => {
                    done()
                })
        });
    });

});