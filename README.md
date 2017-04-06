# easyfetch

[![npm version](https://img.shields.io/npm/v/easyfetch.svg?style=flat-square)](https://www.npmjs.com/package/easyfetch)

`easyfetch` is a simple package that aims to facilitate the use of the default fetch function by wrapping it inside an easy to use api.

It uses [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) to support node.js and non-compatible browsers.

# Getting started

## Install

```sh
$ npm install --save easyfetch
```
or

```sh
$ yarn add easyfetch
```

## Api

### `easyFetch(url)`
It returns the `EasyFetch` class instance.

### `jsonFetch(url)`
It returns the `JsonFetch` class instance.
It also adds `Accept` and `Content-Type` headers to : `application/json` and automatically calls `.json()` on the response object returned by the promise.

### `setHeaders(headers)`
Set headers on the request.
`headers` is an object.
It returns the `EasyFetch` or `JsonFetch` class instance in order to chain calls.
*Should be called before `_fetch`.*

### `setQueryParams(queryParams)`
Set query parameters on the url.
`queryParams` is an object.
It returns the `EasyFetch` or `JsonFetch` class instance in order to chain calls.
*Should be called before `_fetch`.*

### `setOptions(options)`
Set options for `fetch`.
`options` is an object.
It returns the `EasyFetch` or `JsonFetch` class instance in order to chain calls.
*Should be called before `_fetch`.*

### `basicAuth(login, password)`
Set the `Authorization` header to `Basic` with `login` and `password`.
It returns the `EasyFetch` or `JsonFetch` class instance in order to chain calls.
*Should be called before `_fetch`.*

### `head()`
It returns the promise returned by `fetch`.
*Calls `_fetch`.*

### `get()`
It returns the promise returned by `fetch`.
*Calls `_fetch`.*

### `post(body)`
It returns the promise returned by `fetch`.
*Calls `_fetch`.*

### `put(body)`
It returns the promise returned by `fetch`.
*Calls `_fetch`.*

### `patch(body)`
It returns the promise returned by `fetch`.
*Calls `_fetch`.*

### `delete()`
It returns the promise returned by `fetch`.
*Calls `_fetch`.*

## Usage Example

```javascript
import {easyFetch, jsonFetch} from 'easyfetch'

var data = {test: "data", field: "test", field2: 1}
var formdata = Object.keys(data).map((k) => [k, encodeURIComponent(data[k])].join('=')).join('&')

easyFetch("https://httpbin.org/get").get()
    .then(response => /* do what you want with the response */)
    .catch(error => console.log(error.response))

easyFetch("https://httpbin.org/post")
    .setHeaders({"Content-Type": "application/x-www-form-urlencoded"})
    .post(formdata)
    .then(response => response.json())
    .catch(error => console.log("Request failed: ", error.response))
    
jsonFetch("https://httpbin.org/get")
    .setHeaders({'X-Api-Key': config.easyPOSLogApi.apiKey})
    .get().then(data => console.log(data))

jsonFetch("https://httpbin.org/post").post(data)
    .then(data => console.log(data))
```

# Contributing

Feel free to open issues and submit pull-requests.