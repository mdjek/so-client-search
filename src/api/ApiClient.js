import axios from 'axios';
// import querystring from 'querystring';
// import { isString } from 'Root/lib/utils/stringExtensions';

class ApiClient {
    constructor({ prefix = 'https://api.stackexchange.com/2.2/' } = {}) {
        this.prefix = prefix;
    }

    get(requestUrl, params = {}) {
        return this.request({
            url: requestUrl,
            method: 'get',
            params,
        });
    }

    request({
        url,
        method,
        body,
        params = {},
        contentType,
    }) {
        const config = {
            headers: {
                Accept: 'application/json',
                'Content-Type': contentType || 'application/json',
            },
        };

        // const query = isString(params) ? params : querystring.stringify({ ...params });
        // const query = params;
        // const urlWithQuery = `${url}?${query}`;

        return axios({
            method,
            // url: `${this.prefix}${urlWithQuery}`,
            url: `${this.prefix}${url}`,
            data: body,
            headers: config.headers,
        })
            .then((response) => {
                const { status, data } = response;

                if (status >= 400) {
                    throw new Error('Bad response from server');
                }

                return data;
            });
        /* .then((data) => {
                if (typeof data === 'object' && data !== null) {
                    const { code, message } = data;

                    if (message) {
                        return message;
                    }

                    throw new Error(code);
                }

                return data;
            }); */
    }
}

export default ApiClient;
