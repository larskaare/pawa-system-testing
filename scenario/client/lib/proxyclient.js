'use strict';

const fetch = require('node-fetch-with-proxy');

async function sendGetRequestAsync(url, options) {
    const response = await fetch(url, options);
    const json = await response.json();
    const headers = response.headers.raw();
    return {
        headers: Object.create(Object.prototype, headers),
        body: json,
        status: response.status,
    };
}

async function sendPostRequestAsync(url, options) {
    const sendingOptions = options || {};
    sendingOptions.method = 'post';
    const response = await fetch(url, sendingOptions);
    const json = await response.json();
    const headers = response.headers.raw();
    return {
        headers: Object.create(Object.prototype, headers),
        body: json,
        status: response.status,
    };
}

module.exports = {
    sendGetRequestAsync,
    sendPostRequestAsync,
};
