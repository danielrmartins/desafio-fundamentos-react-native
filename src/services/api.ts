import axios from 'axios';

const localhost = '192.168.0.14';

const api = axios.create({
  baseURL: `http://10.0.2.2:3333`,
});

export default api;
