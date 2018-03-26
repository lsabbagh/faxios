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
  .baseURL('http://www.test.com/')
  .url('/users/')
  .header('Autharization' 'your_token...')
  .param('id' 'replace_this')
  .data('title' 'hello there!')
  .post()
  .then(res => {})
  .catch(err => {})
```

`baseURL`

```js
faxios()
  .baseURL('http://www.test.com/')
  .request() // default method is get
  .then(res => {})
  .catch(err => {})
```

`url`

```js
faxios()
  .baseURL('http://www.test.com/')
  .url('/users/')
  .request()
  .then(res => {})
  .catch(err => {})
```

`method`

```js
faxios()
  .baseURL('http://www.test.com/')
  .url('/users/')
  .method('post') // get, delete, head, options, post, put, patch
  .request() // can use the name of the method, like post()
  .then(res => {})
  .catch(err => {})
```

`header`

```js
faxios()
  .baseURL('http://www.test.com/')
  .url('/users/')
  .header('Autharization' 'your_token...')
  .header('X-Custom-Header': 'foobar')
  /*
   or
   .header({
      Autharization: your_token...,
     'X-Custom-Header': foobar
   })
  */
  .post()
  .then(res => {})
  .catch(err => {})
```

`param`

```js
faxios()
  .baseURL('http://www.test.com/')
  .url('/users/')
  .param('id' 'replace_this')
  /*
   or
   .param({
      id: your_id,
     name: foobar
   })
  */
  .post()
  .then(res => {})
  .catch(err => {})
```

`data`

```js
faxios()
  .baseURL('http://www.test.com/')
  .url('/users/')
  .data('title' 'hello there!')
  /*
   or
   .data({
      id: your_id,
     title: foobar
   })
  */
  .post()
  .then(res => {})
  .catch(err => {})
```
