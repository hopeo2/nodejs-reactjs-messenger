import axios from 'axios';

class HttpServices {
    constructor() {
        this.client = axios.create({
            baseURL: 'http://localhost:3001/api/v1/',
            timeout: 1000,
            headers: {}
        })
    }
    get(url, config=null){
        try {
            return this.client.get(url, config)
        } catch (error) {
            throw error;
        }
    }
    post(url, params, config=null){
        return this.client.post(url, params, config)
    }
    put(url, params){
        return this.client.put(url, params)
    }
    delete(url, config=null){
        return this.client.delete(url, config)
    }
}

export default HttpServices;