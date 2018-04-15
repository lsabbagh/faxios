'use strict';

// testing...
var faxios = require('../lib/faxios');
describe('Basics', function () {

    this.timeout(10000);

    describe('#on', function () {
        it('.on(event, function)', function (done) {
            faxios().on('complete', function () {
                return console.log('complete:');
            }).on('success', function () {
                return console.log('success:');
            }).on('error', function () {
                return console.log('error:');
            }).on('before', function () {
                return console.log('before:');
            }).on('change', function () {
                return console.log('change:');
            }).on('200', function () {
                return console.log('200');
            }).on('2.*', function () {
                return console.log('2xx');
            }).on(404, function () {
                return console.log('404');
            }).get('https://jsonplaceholder.typicode.com/posts/1/comments').then(function (res) {
                done();
            }).catch(function (err) {
                done();
            });
        });
    });
});