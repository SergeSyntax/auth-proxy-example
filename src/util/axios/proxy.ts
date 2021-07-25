import Axios from 'axios';

export const proxyAxios = Axios.create({
  withCredentials: true,
  baseURL: '/api/proxy'
});
