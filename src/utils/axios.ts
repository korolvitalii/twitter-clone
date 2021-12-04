import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('token');
    if (token) {
      config.headers = {
        Authorization: token,
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export { axios };
