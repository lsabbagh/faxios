// testing...
const faxios = require('../../lib')
describe('alias', function () {
    it('alias(type, key, name)', function (done) {
        faxios()
          .baseURL("http://www.mocky.io/v2/5ae4deef2f00002a0028e838")
          .alias("param", "postId") // <-- setting the alias
          .postId(1)
          .GET // => Promise
          .then(res => {
            done(res.config.params.postId == "1" ? false : "postId(1) should add param of key postId=1");
          })
          .catch(err => done(err));
    });
});
