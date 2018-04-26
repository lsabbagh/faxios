// testing...
const faxios = require('../lib/faxios')
describe('Listeners', function () {
    this.timeout(10000)
    
    describe('#on1XX', function () {
        it('.on1XX, onInformational', function (done) {
            let on1XX, onInformational, error
            faxios()
              .on1XX(() => on1xx = true)
              .onInformational(() => onInformational = true)

              .on2XX(() => done("on2XX!"))
              .onSuccess(() => done("onSuccess!"))

              .on3XX(() => done("on3XX!"))
              .onRedirectional(() => done("onRedirectional"))
              
              .on4XX(() => done("on4XX!"))
              .onClientError(() => done("onClientError!"))

              .on5XX(() => done("on5XX!"))
              .onServerError(() => done('onServerError!'))

              
              .error(() => error = true)

              .get("http://www.mocky.io/v2/5ae17fd42d000050009d7c59")
              .then(res => {
                  done('then!')
              })
              .catch(err => {
                  if(!error) done('!error')
                  if(!on1xx) done('!on1XX')
                  if(!onInformational) done('!_informational') 
                  done()
              });
        });
    });

    describe('#on 2XX', function () {
        it('.on2XX, onSuccess', function (done) {
            let on2XX, onSuccess, success
            faxios()
              .on1XX(() => done("1XX!"))
              .onInformational(() => done("onInformational!"))

              .on2XX(() => (on2XX = true))
              .onSuccess(() => (onSuccess = true))

              .on3XX(() => done("on3XX!"))
              .onRedirectional(() => done("onRedirectional"))

              .on4XX(() => done("on4XX!"))
              .onClientError(() => done("onClientError!"))

              .on5XX(() => done("on5XX!"))
              .onServerError(() => done("onServerError!"))

              .success(() => (success = true))

              .get("http://www.mocky.io/v2/5ae199cb2d000055009d7ceb")
              .then(res => {
                if (!success) done("!success");
                if (!onSuccess) done("!onSuccess");
                if (!on2XX) done("!on2XX");
                done();
              })
              .catch(err => {
                done("catch!");
              });
        });

    });

    
    describe('#on 3XX', function () {
        it('.on3XX, onRedirectional', function (done) {
            let on3XX, onRedirectional, error
            faxios()
              .on1XX(() => done("1XX!"))
              .onInformational(() => done("onInformational!"))

              .on2XX(() => done("on2XX!"))
              .onSuccess(() => done("onSuccess"))

              .on3XX(() => (on3XX = true))
              .onRedirectional(() => (onRedirectional = true))


              .on4XX(() => done("on4XX!"))
              .onClientError(() => done("onClientError!"))

              .on5XX(() => done("on5XX!"))
              .onServerError(() => done("onServerError!"))

              .error(() => (error = true))

              .get("http://www.mocky.io/v2/5ae17c212d00005d009d7c36")
              .then(res => {
                done("then!");
              })
              .catch(err => {
                if (!error) done("!error");
                if (!onRedirectional) done("!onRedirectional");
                if (!on3XX) done("!on3XX");
                done();
              });
        });

    });

    describe('#on 4XX', function () {
        it('.on4XX, onClientError', function (done) {
            let on4XX, onClientError, error
            faxios()
              .on1XX(() => done("1XX!"))
              .onInformational(() => done("onInformational!"))

              .on2XX(() => done("on2XX!"))
              .onSuccess(() => done("onSuccess"))

              .on3XX(() => done('on3XX!'))
              .onRedirectional(() => done('onRedirectional!'))


              .on4XX(() => on4XX = true)
              .onClientError(() => onClientError = true)

              .on5XX(() => done("on5XX!"))
              .onServerError(() => done("onServerError!"))

              .error(() => (error = true))


              .get("http://www.mocky.io/v2/5ae17acc2d00004e009d7c31")
              .then(res => {
                done("then!");
              })
              .catch(err => {
                if (!error) done("!error");
                if (!onClientError) done("!onClientError");
                if (!on4XX) done("!on4XX");
                done();
              });
        });
    });

    describe('#on 5XX', function () {
        it('.on5XX, onServerError', function (done) {
            let on5XX, onClientError, error
            faxios()
              .on1XX(() => done("1XX!"))
              .onInformational(() => done("onInformational!"))

              .on2XX(() => done("on2XX!"))
              .onSuccess(() => done("onSuccess"))

              .on3XX(() => done('on3XX!'))
              .onRedirectional(() => done('onRedirectional!'))


              .on4XX(() => done('on4XX'))
              .onClientError(() => done('onClientError'))

              .on5XX(() => on5XX = true)
              .onServerError(() => onServerError = true)

              .error(() => (error = true))

              .get("http://www.mocky.io/v2/5ae179472d000028009d7c2o3")
              .then(res => {
                done("then!");
              })
              .catch(err => {
                if (!error) done("!error");
                if (!onServerError) done("!onServerError");
                if (!on5XX) done("!on5XX");
                done();
              });
        });
    });
    

});