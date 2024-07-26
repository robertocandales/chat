import axios from 'axios';

export const API_BASE = import.meta.env.VITE_API_BASE;

export const client = axios.create({
  baseURL: `${API_BASE}`
});

client.interceptors.request.use(
  async config => {
    try {
      // to use in the future if we need to add token to the request
      const token = '';

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error while fetching session:', error);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
