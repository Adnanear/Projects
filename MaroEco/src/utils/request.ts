import axios, { AxiosRequestConfig } from 'axios';

const request = axios.create();

request.interceptors.request.use((config) => {
  const newConfig: AxiosRequestConfig = {
    ...config,
    headers: {
      Authorization: 'Bearer <TOKEN>',
    },
    baseURL: import.meta.env.VITE_API_URL,
  };
  return newConfig;
});

export default request;
