// testing...
const faxios = require('../../lib/faxios')
describe('onBadRequest', function () {
    it('onBadRequest', function (done) {
        let res = []
        faxios()
          .url("https://httpstat.us/400")

          .onInformational(() => done("onInformational!"))

          .onSuccess(() => done("onSuccess"))

          .onRedirectional(() => done("onRedirectional!"))

          .onClientError(() => res.push('onClientError'))

          .onBadRequest(() => res.push('onBadRequest'))

          .onServerError(() => done('onServerError'))

          .onError(() => res.push('onError'))

          .GET
          .then(res => {
            done("then!");
          })
          .catch(err => {
            if (res.length < 3) done(res);
            else done();
          });
    });
});