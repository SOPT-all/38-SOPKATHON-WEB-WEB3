import axios from 'axios';

const API_BASE_URL =
  import.meta.env.VITE_BASE_URL || 'https://sopkathon-web3.p-e.kr';

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
