import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.12:3333',
});

export function setAuthHeader(access_token) {
  api.defaults.headers.Authorization = `Bearer ${access_token}`;
}

export default api;
