export class EasyFetch {
    constructor(url) {
        this.url = url;
        this.headers = {};
        this.queryParams = {};
        this.options = {};
    }

    setHeaders(headers, override = true) {
        const keep = override ? {} : this.headers;
        this.headers = {...keep, ...headers};
        return this;
    }

    setQueryParams(queryParams, override = true) {
        const keep = override ? {} : this.queryParams;
        this.queryParams = {...keep, ...queryParams};
        return this;
    }

    setOptions(options) {
        this.options = options;
        return this;
    }

    basicAuth(login, password) {
        this.headers.Authorization = "Basic " + new Buffer(`${login}:${password}`).toString('base64');
        return this;
    }

    _buildQueryParams() {
        let q = Object.entries(this.queryParams).map(([k, value]) => {
            if (Array.isArray(value))
                return value.map(v => [k, encodeURIComponent(v)].join('=')).join('&');
            return [k, encodeURIComponent(value)].join('=');
        }).join('&');
        if (this.url.indexOf("?") === -1 && q)
            q = `?${q}`;
        return q;
    }

    _checkResponseStatus(response) {
        if (response.status >= 200 && response.status < 400) {
            return response;
        } else {
            var error = new Error(response.statusText);
            error.code = response.status;
            error.response = response;
            throw error;
        }
    }

    _fetch(method, body) {
        return fetch(this.url + this._buildQueryParams(),
            {...this.options, method: method, headers: this.headers, body: body})
        .then(this._checkResponseStatus);
    }

    head() {
        return this._fetch('HEAD');
    }

    get() {
        return this._fetch('GET');
    }

    post(body) {
        return this._fetch('POST', body);
    }

    put(body) {
        return this._fetch('PUT', body);
    }   

    patch(body) {
        return this._fetch('PATCH', body);
    }

    delete(body) {
        return this._fetch('DELETE', body);
    }
}

export function easyFetch(url) {
    return new EasyFetch(url);
}

const JSON_HEADERS = {'Accept': 'application/json',
                      'Content-Type': 'application/json'};

export class JsonFetch extends EasyFetch {
    constructor(url) {
        super(url);
        this.headers = {...JSON_HEADERS};
    }

    setHeaders(headers, override = true) {
        const keep = override ? {} : this.headers;
        this.headers = {...JSON_HEADERS, ...keep, ...headers};
        return this;
    }

    _fetch(method, body) {
        if (body !== undefined)
            body = JSON.stringify(body);
        return super._fetch(method, body).then((resp) => resp.text()).then((body) => {
            if (body.length)
                return JSON.parse(body);
            else
                return {};
        });
    }
}

export function jsonFetch(url) {
    return new JsonFetch(url);
}
