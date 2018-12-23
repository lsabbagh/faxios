// testing...
const faxios = require('../../lib/faxios')
describe('Listeners', function () {
    describe('onInformational', function () {
        it('onInformational', function (done) {
            let onInformational, error
            faxios()
              .onInformational(() => onInformational = true)
              .onSuccess(() => done("onSuccess!"))
              .onRedirectional(() => done("onRedirectional"))
              .onClientError(() => done("onClientError!"))
              .onServerError(() => done('onServerError!'))
              .onError(() => error = true)
              .get("http://www.mocky.io/v2/5ae17fd42d000050009d7c59")
              .then(res => {
                  done('then!')
              })
              .catch(err => {
                  if(!error) done('!error')
                  if(!onInformational) done('!_informational') 
                  done()
              });
        });
    });

    describe('onSuccess', function () {
        it('onSuccess', function (done) {
            let onSuccess
            faxios()
              .onInformational(() => done("onInformational!"))
              .onSuccess(() => (onSuccess = true))
              .onRedirectional(() => done("onRedirectional"))
              .onClientError(() => done("onClientError!"))
              .onServerError(() => done("onServerError!"))
              .get("http://www.mocky.io/v2/5ae199cb2d000055009d7ceb")
              .then(res => {
                if (!onSuccess) done("!onSuccess");
                done();
              })
              .catch(err => {
                done("catch!");
              });
        });

    });

    
    describe('onRedirectional', function () {
        it('onRedirectional', function (done) {
            let onRedirectional, error
            faxios()
              .onInformational(() => done("onInformational!"))
              .onSuccess(() => done("onSuccess"))
              .onRedirectional(() => (onRedirectional = true))
              .onClientError(() => done("onClientError!"))
              .onServerError(() => done("onServerError!"))
              .onError(() => (error = true))
              .get("http://www.mocky.io/v2/5ae17c212d00005d009d7c36")
              .then(res => {
                done("then!");
              })
              .catch(err => {
                if (!error) done("!error");
                if (!onRedirectional) done("!onRedirectional");
                done();
              });
        });

    });

    describe('onClientError', function () {
        it('onClientError', function (done) {
            let onClientError, error
            faxios()
              .onInformational(() => done("onInformational!"))
              .onSuccess(() => done("onSuccess"))
              .onRedirectional(() => done('onRedirectional!'))
              .onClientError(() => onClientError = true)
              .onServerError(() => done("onServerError!"))
              .onError(() => (error = true))
              .get("http://www.mocky.io/v2/5ae17acc2d00004e009d7c31")
              .then(res => {
                done("then!");
              })
              .catch(err => {
                if (!error) done("!error");
                if (!onClientError) done("!onClientError");
                done();
              });
        });
    });

    describe('onServerError', function () {
        it('onServerError', function (done) {
            let onServerError, error
            faxios()
              .onInformational(() => done("onInformational!"))
              .onSuccess(() => done("onSuccess"))
              .onRedirectional(() => done("onRedirectional!"))
              .onClientError(() => done("onClientError"))
              .onServerError(() => (onServerError = true))
              .onError(() => (error = true))
              .get("http://www.mocky.io/v2/5ae235012d00004f009d8082")
              .then(res => {
                done("then!");
              })
              .catch(err => {
                if (!error) done("!error");
                if (!onServerError) done("!onServerError");
                done();
              });
        });
    });

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
              .on(400, () => res.push('400'))
              .GET
              .then(res => {
                done("then!");
              })
              .catch(err => {
                if (res.length < 4) done(res);
                else done();
              });
        });
    });

    describe('onUnauthorized', function () {
        it('onUnauthorized', function (done) {
            let res = []
            faxios()
              .url("https://httpstat.us/401")
              .onInformational(() => done("onInformational!"))
              .onSuccess(() => done("onSuccess"))
              .onRedirectional(() => done("onRedirectional!"))
              .onClientError(() => res.push('onClientError'))
              .onUnauthorized(() => res.push('onUnauthorized'))
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

    describe('onForbidden', function () {
        it('onForbidden', function (done) {
            let res = []
            faxios()
              .url("https://httpstat.us/403")
              .onInformational(() => done("onInformational!"))
              .onSuccess(() => done("onSuccess"))
              .onRedirectional(() => done("onRedirectional!"))
              .onClientError(() => res.push('onClientError'))
              .onForbidden(() => res.push('onForbidden'))
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

    describe('onNotFound', function () {
      it('onNotFound', function (done) {
          let res = []
          faxios()
            .url("https://httpstat.us/404")
            .onInformational(() => done("onInformational!"))
            .onSuccess(() => done("onSuccess"))
            .onRedirectional(() => done("onRedirectional!"))
            .onClientError(() => res.push('onClientError'))
            .onNotFound(() => res.push('onNotFound'))
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

  describe('onInternalServerError', function () {
    it('onInternalServerError', function (done) {
        let res = []
        faxios()
          .url("https://httpstat.us/500")
          .onInformational(() => done("onInformational!"))
          .onSuccess(() => done("onSuccess"))
          .onRedirectional(() => done("onRedirectional!"))
          .onClientError(() => done('onClientError'))
          .onInternalServerError(() => res.push('onInternalServerError'))
          .onServerError(() => res.push('onServerError'))
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

describe('onServiceUnavailable', function () {
  it('onServiceUnavailable', function (done) {
      let res = []
      faxios()
        .url("https://httpstat.us/503")
        .onInformational(() => done("onInformational!"))
        .onSuccess(() => done("onSuccess"))
        .onRedirectional(() => done("onRedirectional!"))
        .onClientError(() => done('onClientError'))
        .onServiceUnavailable(() => res.push('onServiceUnavailable'))
        .onServerError(() => res.push('onServerError'))
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



    describe('on', function () {
      it('on', function (done) {
          let res = []
          faxios()
            .url("https://httpstat.us/410")
            .onInformational(() => done("onInformational!"))
            .onSuccess(() => done("onSuccess"))
            .onRedirectional(() => done("onRedirectional!"))
            .onClientError(() => res.push('onClientError'))
            .onBadRequest(() => done('onBadRequest'))
            .onServerError(() => done('onServerError'))
            .onError(() => res.push('onError'))
            .on('gone', () => res.push('gone'))
            .on(400, () => res.push('400'))
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
    

});