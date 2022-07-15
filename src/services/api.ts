import axios from 'axios';

const api = axios.create({
  baseURL: 'https://horta7.controlhonorarios.com',
});

export default api;