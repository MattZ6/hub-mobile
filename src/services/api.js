import axios from 'axios';

const api = axios.create({
  baseURL: 'http://167.71.177.242',
});

export function setAuthHeader(access_token) {
  api.defaults.headers.Authorization = `Bearer ${access_token}`;
}

export default api;
