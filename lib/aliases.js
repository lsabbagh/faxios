'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (instance) {
    return instance.alias('header', 'Accept', 'accept').alias('header', 'Accept-Charset', 'acceptCharset').alias('header', 'Accept-Encoding', 'acceptEncoding').alias('header', 'AcceptLanguage', 'acceptLanguage').alias('header', 'Authorization', 'authorization');
};