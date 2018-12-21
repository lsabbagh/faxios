const faxios = require('../../lib')

describe('request',  () => 
    it('request()', done => {
        faxios()
            .url('https://jsonplaceholder.typicode.com/posts/1/comments')
            .request()
            .then(res => {
                done()
            })
            .catch(err => {
                done('failed')
            })
        }
    )
);