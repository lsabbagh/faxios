# faxios

<!---
[![npm version](https://img.shields.io/npm/v/faxios.svg?style=flat-square)](https://www.npmjs.org/package/faxios)
[![build status](https://img.shields.io/travis/faxios/faxios.svg?style=flat-square)](https://travis-ci.org/faxios/faxios)
[![code coverage](https://img.shields.io/coveralls/mzabriskie/faxios.svg?style=flat-square)](https://coveralls.io/r/mzabriskie/faxios)
[![npm downloads](https://img.shields.io/npm/dm/faxios.svg?style=flat-square)](http://npm-stat.com/charts.html?package=faxios)
[![gitter chat](https://img.shields.io/gitter/room/mzabriskie/faxios.svg?style=flat-square)](https://gitter.im/mzabriskie/faxios)
--->

Promise based HTTP client for the browser and node.js that is build totally on top of axios.

<!---
## Features

* Make [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser
* Make [http](http://nodejs.org/api/http.html) requests from node.js
* Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
* Intercept request and response
* Transform request and response data
* Cancel requests
* Automatic transforms for JSON data
* Client side support for protecting against [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

## Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                 | Latest ✔                                                                                    | Latest ✔                                                                                 | Latest ✔                                                                              | Latest ✔                                                                           | 8+ ✔                                                                                                                         |

[![Browser Matrix](https://saucelabs.com/open_sauce/build_matrix/faxios.svg)](https://saucelabs.com/u/faxios)

--->

## Installing

Using npm:

```bash
$ npm install faxios
```

Using bower:

```bash
$ bower install faxios
```

Using cdn:

```html
<script src="https://unpkg.com/faxios/dist/faxios.min.js"></script>
```

## Examples

```js
faxios()
 .get('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(res => {})
  .catch(err => {})
```

`baseURL`

```js
faxios()
  .baseUrl('http://jsonplaceholder.typicode.com')
  .get('/posts/1/comments') // => Promise

  .then(res => {})
  .catch(err => {})
```

`url`

```js
faxios()
  .baseURL('http://jsonplaceholder.typicode.com')
  .url('posts/1/comments' )
  // or .url('posts', 1, 'comments')
  .get() // => Promise

  .then(res => {})
  .catch(err => {})


```

`method`

```js
faxios()
  .baseURL('http://jsonplaceholder.typicode.com')
  .url('posts', 1, 'comments')
  .method('get')
  .request() // => Promise

  .then(res => {})
  .catch(err => {})
```



`param`

```js
faxios()
  .baseUrl('http://www.placeholder.typicode.com')
  .url('posts')
  .method('get')
  .param('postId', 1)
  .request() // => Promise

  .then(res => {})
  .catch(err => {})
```

`header`

```js
faxios()
  .baseURL('http://jsonplaceholder.typicode.com')
  .url('posts')
  .method('get')
  .param('postId', 1)
  .header('Authorization', 'your_token')
  .request() // => Promise

  .then(res => {})
  .catch(err => {})
```



`header`

```js
faxios()
  .baseURL('http://jsonplaceholder.typicode.com')
  .url('/posts')
  .method('post')
  .header('Authorization', 'your_token')
  .param('postId', 1)
  .data('key1', 'value1')  // could be any key or value
  .data('key2', 'value2')  // could be any key or value
  .data('key3', 'value3')  // could be any key or value
  .request() // => Promise

  .then(res => {})
  .catch(err => {})
```

`alias`

```js
faxios()
  .baseURL('http://jsonplaceholder.typicode.com')
  .alias('param', 'postId') // <-- setting the alias
  .postId(1)
  .request() // => Promise

  .then(res => {})
  .catch(err => {})
```

`use`

```js
// base middleware
let base = fax => fax
  .baseURL('http://jsonplaceholder.typicode.com')
  .header('Content-Type', 'text/html')

// posts middleware
let posts = fax => fax
  .use(base)
  .url('/posts')
  .data('key1', 'value1')
  .alias('param', 'postId') // <-- setting the alias

faxios()
  .use(posts)
  .postId(1)
  .request() // => Promise

  .then(res => {})
  .catch(err => {})
```

`middleware`

```js
// saving the middleware in faxios,
// notice it's not saved in an instance
faxios.middleware('base', base)

faxios()
  .use('base') // name of the saved middleware
  .use(posts) // reference to the middleware
  .postId(1)
  .data('key1', 'value1')

  .change(config => console.log(config))

  .request() // => Promise
  .then(res => {})
  .catch(err => {})
```


`listeners`
```js
faxios()
  .use(base)
  .postId(1)
  .data('key1', 'value1')

  .before(config => console.log('before sending', config))
  .success(config => console.log('only on success', config)) //200
  .error(config => console.log('only on error ', config))
  .complete(config => console.log('on success and error', config))
  .change(config => console.log('before and complete', config))

  // or...
  .on('before', ()=> console.log('on before', config))
  .on('success', ()=> console.log('only on success', config))
  .on('error', ()=> console.log('only on error', config))
  .on('complete', ()=> console.log('on success and error', config))
  .on('change', ()=> console.log('on before and complete', config))


  .request() // => Promise
  .then(res => {})
  .catch(err => {})
```

`loading`
```js

faxios()
  .use(base)
  .key('getting_posts')
  .set('param', 'postId', 1) // --> param('postId', 1)
  .request() // => Promise

faxios.loading('getting_posts') // => true
// after two seconds
faxios.loading('getting_posts') // => false
```


`set`

```js
faxios()
   // check axios docs
  .use(base)
  // param is an example
  .set('param', 'postId', 1) 

  .request() // => Promise
  .then(res => {})
  .catch(err => {})
```

<details>
  <summary>check axios config object</summary>
  
  
```js
{
  
  // `url` is the server URL that will be used for the request
  url: '/user',

  // `method` is the request method to be used when making the request
  method: 'get', // default

  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` allows changes to the request data before it is sent to the server
  // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
  // FormData or Stream
  // You may modify the headers object.
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: [function (data) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `headers` are custom headers to be sent
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  params: {
    ID: 12345
  },

  // `paramsSerializer` is an optional function in charge of serializing `params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` is the data to be sent as the request body
  // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // When no `transformRequest` is set, must be of one of the following types:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Browser only: FormData, File, Blob
  // - Node only: Stream, Buffer
  data: {
    firstName: 'Fred'
  },

  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 1000,

  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // default

  // `adapter` allows custom handling of requests which makes testing easier.
  // Return a promise and supply a valid response (see lib/adapters/README.md).
  adapter: function (config) {
    /* ... */
  },

  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` indicates the type of data that the server will respond with
  // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default

  // `responseEncoding` indicates encoding to use for decoding responses
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default

  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

  // `onUploadProgress` allows handling of progress events for uploads
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` allows handling of progress events for downloads
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `maxContentLength` defines the max size of the http response content in bytes allowed
  maxContentLength: 2000,

  // `validateStatus` defines whether to resolve or reject the promise for a given
  // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
  // or `undefined`), the promise will be resolved; otherwise, the promise will be
  // rejected.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  maxRedirects: 5, // default

  // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Only either `socketPath` or `proxy` can be specified.
  // If both are specified, `socketPath` is used.
  socketPath: null, // default

  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' defines the hostname and port of the proxy server
  // Use `false` to disable proxies, ignoring environment variables.
  // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
  // supplies credentials.
  // This will set an `Proxy-Authorization` header, overwriting any existing
  // `Proxy-Authorization` custom headers you have set using `headers`.
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` specifies a cancel token that can be used to cancel the request
  // (see Cancellation section below for details)
  cancelToken: new CancelToken(function (cancel) {
  })
}

```
<details>

`TODOS`
- [x] add on function
- [ ] add clone function
- [x] add use function
- [ ] add log function
- [ ] add cancel function
- [ ] add update function
- [x] add shortcut function
- [x] add key function
- [ ] add history
- [ ] add cache
- [ ] add save function
- [ ] add appendData function

- [x] add static middlewares
