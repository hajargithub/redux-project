import axios from 'axios';
import { getToken } from './storage';
const baseURL = 'https://dummyjson.com'
const token = getToken();
const api = token ? axios.create(`${baseURL}/auth`) : axios.create({ baseURL })
api.interceptors.request.use((config) => {
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;