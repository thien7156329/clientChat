import axios from 'axios';

class API {

    _request(_config) {
        let config = Object.assign(
            _config = _config || {}
        );
        let incomming = new Promise((resolve, reject) => {
            return axios(config)
                .then(response => {
                    return response.data;
                })
                .catch(err => {
                    let { response } = err;
                    if (!response) {
                        throw err;
                    }
                });
        });
        return incomming;
    }

    get = (url, params, _config) => {
        let config = Object.assign({
            url,
            method: 'get',
            params
        }, _config || {});
        return this._request(config);
    }

    post(url, data, _config) {
        let config = Object.assign({
            url,
            method: 'post',
            data
        }, _config || {});
        return this._request(config);
    }

    put(url, data, _config) {
        let config = Object.assign({
            url,
            method: 'put',
            data
        }, _config || {});
        return this._request(config);
    }

    patch(url, data, _config) {
        let config = Object.assign({
            url,
            method: 'patch',
            data
        }, _config || {});
        return this._request(config);
    }

    delete(url, params, _config) {
        let config = Object.assign({
            url,
            method: 'delete',
            params
        }, _config || {});
        return this._request(config);
    }
}

export default API