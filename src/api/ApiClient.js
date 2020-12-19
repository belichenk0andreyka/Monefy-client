import axios from 'axios';

export default class ApiClient {
    constructor ({ prefix }) {
        axios.defaults.headers.post['Accept'] = '*/*';
        this.prefix = prefix;
    }
    get (requestUrl, payload = {}, params, token) {
        if (token) {
            axios.defaults.headers.get['x-auth-token'] = token;
        }
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'get',
            data: payload,
            params,
        });
    }
    put (requestUrl, payload = {}) {
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'put',
            data: payload,
        });
    }
    post (requestUrl, payload = {}, token) {
        if (token) {
            axios.defaults.headers.post['x-auth-token'] = token;
        }
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'post',
            data: payload,
        });
    }
    delete (requestUrl) {
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'delete',
        });
    }
}
const request = ({
                     url, method, data, params = {},
                 }) => {
    return axios({
        method,
        url,
        params,
        data,
    })
        .then((response) => {
            return response;
        });
};
