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
  .success(config => console.log('only on success', config))
  .error(config => console.log('only on error ', config))
  .done(config => console.log('on success and error', config))
  .change(config => console.log('before and done', config))

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
  .set('param', 'postId', 1) // --> param('postId', 1)
  .request() // => Promise
  .then(res => {})
  .catch(err => {})
  /*
    set('url','value')
    set('method','value')
    set('baseURL','value')
    set('paramsSerializer','value')
    set('timeout','value')
    set('withCredentials','value')
    set('adapter','value')
    set('responseType','value')
    set('responseEncoding','value')
    set('xsrfCookieName','value')
    set('xsrfHeaderName','value')
    set('onUploadProgress','value')
    set('onDownloadProgress','value')
    set('maxContentLength','value')
    set('maxContentLength','value')
    set('validateStatus','value')
    set('maxRedirects','value')
    set('socketPath','value')
    set('httpAgent','value')
    set('httpsAgent','value')
  */
```


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
