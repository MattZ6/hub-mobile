import axios from 'axios';

const GOOGLE_URL = 'https://maps.googleapis.com/maps/api/';

export const GOOGLE_API_KEY = '';

const googleApi = axios.create({
  baseURL: GOOGLE_URL,
  timeout: 5000,
});

export default googleApi;
