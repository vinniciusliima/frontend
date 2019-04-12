import axios from 'axios';

const api = axios.create({
    baseURL: 'htpps://omnistack-backend.herokuapp.com'
});

export default api;