import fetch from 'isomorphic-fetch'

export class EasyFetch {
    constructor(url) {
        this.url = url
        this.headers = {}
        this.queryParams = {}
        this.options = {}
    }

    setHeaders(headers) {
        this.headers = headers
        return this
    }

    setQueryParams(queryParams) {
        this.queryParams = queryParams
        return this
    }

    setOptions(options) {
        this.options = options
        return this
    }

    basicAuth(login, password) {
        this.headers.Authorization = "Basic " + new Buffer(`${login}:${password}`).toString('base64')
        return this
    }

    _buildQueryParams() {
        let q = Object.keys(this.queryParams).map((k) => [k, encodeURIComponent(this.queryParams[k])].join('=')).join('&')
        if (this.url.indexOf("?") === -1 && q)
            q = `?${q}`
        return q
    }

    _checkResponseStatus(response) {
        if (response.status >= 200 && response.status < 400) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.code = response.status
            error.response = response
            throw error
        }
    }

    _fetch(method, body) {
        return fetch(this.url + this._buildQueryParams(),
            {...this.options, method: method, headers: this.headers, body: body})
        .then(this._checkResponseStatus)
    }

    head() {
        return this._fetch('HEAD')
    }

    get() {
        return this._fetch('GET')
    }

    post(body) {
        return this._fetch('POST', body)
    }

    put(body) {
        return this._fetch('PUT', body)
    }   

    patch(body) {
        return this._fetch('PATCH', body)
    }

    delete() {
        return this._fetch('DELETE')
    }
}

export function easyFetch(url) {
    return new EasyFetch(url)
}


export class JsonFetch extends EasyFetch {
    constructor(url) {
        super(url)
        this.headers = {'Accept': 'application/json',
                        'Content-Type': 'application/json'}
    }

    setHeaders(headers) {
        this.headers = {...this.headers, ...headers}
        return this
    }

    _fetch(method, body) {
        if (body !== undefined)
            body = JSON.stringify(body)
        return super._fetch(method, body).then((resp) => resp.json())
    }
}

export function jsonFetch(url) {
    return new JsonFetch(url)
}