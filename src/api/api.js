import axios from 'axios';

class API {

    _request(_config) {
        let config = Object.assign(
            _config = _config || {}
        );
        console.log(config, 'config')
        return axios(config)
            .then(response => {
                console.log(response, 'lslsls')
                return response.data;
            })
            .catch(err => {
                let { response } = err;
                console.log(response, 'err')
                if (!response) {
                    throw err;
                }
            });
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