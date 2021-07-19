import Axios from 'axios';

export const axios = Axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000/api/proxy'
});
