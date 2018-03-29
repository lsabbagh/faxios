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
  .url('/posts')
  .method('post')
  .header('Content-Type', 'text/html')
  .param('postId', 1)
  .data('key1', 'value1')
  .alias('param', 'name') // <-- setting the alias
  .name('the name..') // <-- param('name', 'the name...')
  .request() // => Promise

  .then(res => {})
  .catch(err => {})
```

`use`

```js
// authentication middleware
let auth = fax => fax
  .header('Authorization', 'your_token')
  .alias('param', 'name')

faxios()
  .baseURL('http://jsonplaceholder.typicode.com')
  .url('/posts')
  .method('post')
  .header('Content-Type', 'text/html')
  .param('postId', 1)
  .data('key1', 'value1')
  .name('the name..') 
  .use(auth) // <--use the middleware
  .request() // => Promise

  .then(res => {})
  .catch(err => {})
```

`TODOS`
- [x] add on function
- [ ] add extend function
- [ ] add clone function
- [x] add use function
- [ ] add log function
- [ ] add cancel function
- [ ] add update function
- [x] add shortcut function
- [ ] add key function
- [ ] add history
- [ ] add cache
- [ ] add save function
- [ ] add appendURL function
- [ ] add appendData function
