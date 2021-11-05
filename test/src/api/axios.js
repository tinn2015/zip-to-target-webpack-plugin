import axios from 'axios';

const Ax = axios.create({
  timeout: 150000,
  headers: { 'content-type': 'application/json' },
});

export default Ax;
