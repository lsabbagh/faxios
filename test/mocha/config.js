const faxios = require('../../lib')

global.jsonPlaceHolderURL = 'http://jsonplaceholder.typicode.com'

faxios.builders.add('base', instance => instance.baseURL(global.jsonPlaceHolderURL))
