# Faxios

[![npm version](https://img.shields.io/npm/v/faxios.svg?style=flat-square)](https://www.npmjs.org/package/faxios)
[![npm downloads](https://img.shields.io/npm/dm/faxios.svg?style=flat-square)](http://npm-stat.com/charts.html?package=faxios)
[![gitter chat](https://img.shields.io/gitter/room/mzabriskie/faxios.svg?style=flat-square)](https://gitter.im/lsabbagh/faxios)

HTTP client the browser and node.js

```js
faxios("https://jsonplaceholder.typicode.com/posts/1/comments")

  .GET // -> Promise
  .then(res => {})
  .catch(err => {})
```

`url`

```js
faxios()
  .url("http://jsonplaceholder.typicode.com/posts/1/comments")

  .GET // -> Promise
  .then(res => {})
  .catch(err => {});
```

`baseURL`

```js
faxios()
  .baseURL("http://jsonplaceholder.typicode.com")
  .url("/posts/1/comments")

  .GET // -> Promise
  .then(res => {})
  .catch(err => {});
```

`param`

```js
faxios()
  .baseURL("http://placeholder.typicode.com")
  .url("posts")
  .param("postId", 1)

  .GET // -> Promise
  .then(res => {})
  .catch(err => {});
```

`append`

```js
faxios()
  .baseURL("http://placeholder.typicode.com")
  .url("posts")
  .append("postId", 1) // set('data', new URLSearchParams()); then data.append('postId', 1)
  .append({
    key1: value1,
    key2: value2,
    }) // set('data', new URLSearchParams()); then data.append('postId', 1)

  .GET // -> Promise
  .then(res => {})
  .catch(err => {});
```

`header`

```js
faxios()
  .baseURL("http://jsonplaceholder.typicode.com")
  .url("posts")
  .param("postId", 1)
  .header("Authorization", "your_token")

  .GET // => Promise
  .then(res => {})
  .catch(err => {});
```

`data`

```js
faxios()
  .baseURL("http://jsonplaceholder.typicode.com")
  .url("/posts")
  .header("Authorization", "f8dc3ee4224987fbc3498234")
  .param("postId", 1)
  .data("key", "value")

  .POST // => Promise
  .then(res => {})
  .catch(err => {});
```

`method`

```js
faxios()
  .baseURL("http://jsonplaceholder.typicode.com")
  .url("posts", 1, "comments")

  // get, post, put, delete, head, options, patch, fetch, request
  .method("get")

  .FETCH // => Promise
  .then(res => {})
  .catch(err => {});
```

`cancel`

```js
// building..
let req = faxios()
  .baseURL("http://jsonplaceholder.typicode.com")
  .url("posts", 1, "comments")

// fetching..
req // => 
  .FETCH // => Promise
  .then(res => {})
  .catch(err => {});

// canceling...
req.cancel();
```

`alias`

```js
faxios()
  .baseURL("http://jsonplaceholder.typicode.com")
  .alias("param", "postId") // <-- setting the alias
  .postId(1)

  .FETCH // => Promise
  .then(res => {})
  .catch(err => {});
```

`use a builder`

```js
let base_builder = fax => {
  fax
    .baseURL("http://jsonplaceholder.typicode.com")
    .header("Content-Type", "text/html");
};

faxios()
  .use(base_builder)
  .url("/posts")

  .FETCH // => Promise
  .then(res => {})
  .catch(err => {})
```

`add a builder and use it`

```js
faxios.builders.add("buider_name", fax =>
  fax
    .baseURL("http://jsonplaceholder.typicode.com")
    .header("Content-Type", "text/html")
);

faxios()
  .use("builder_name")
  .url("/posts")

  .FETCH // => Promise
  .then(res => {})
  .catch(err => {});
```

`replace in url`

```js
faxios.builders.add("buider_name", fax =>
  fax
    .baseURL("http://jsonplaceholder.typicode.com")
    .header("Content-Type", "text/html")
    .url("users/:id/profile")
);

faxios()
  .use("builder_name")
  .url({ ":id": 1 })

  .FETCH // => Promise
  .then(res => {})
  .catch(err => {});
```

`listeners`

````js
faxios()
.use(base)
.postId(1)
.data('key1', 'value1')

.before(config => console.log('before sending', config))
.success(config => console.log('only on success', config)) //200
.error(config => console.log('only on error ', config))
.complete(config => console.log('on success and error', config))
.change(config => console.log('before and complete', config))

.onInformational(() => console.log('onInformational, response status matches 1[0-9][0-9]'))
.onSuccess(() => console.log('onSuccess, response status matches 2[0-9][0-9]'))
.onRedirectional(() => console.log('onRedirectional, response status matches 5[0-9][0-9]'))
.onClientError(() => console.log('onClientError, response status matches 4[0-9][0-9]'))
.onServerError(() => console.log('onServerError, response status matches 5[0-9][0-9]'))

// regex
.on(200, () => console.log('on response status is 200'))
.on(404,  () => console.log('on response status is 404'))
.on(/200|400/, () => console.log('on status 200 or 400'))
.on(new RegExp('200|400'), () => console.log('on status 200 or 400'))
.on('2.*', () => console.log('on response status matches the regex 2.*'))


.FETCH
.then(res => {})
.catch(err => {})
  ```
````
