const faxios = require('../../lib')

describe('get',  () => 
    it('faxios(full_url)', done => {
        faxios('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(res => {
                done()
            })
            .catch(err => {
                done('failed')
            })
        }
    )
);