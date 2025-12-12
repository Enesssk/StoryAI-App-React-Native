import axios from 'axios';
import { BASE_URL } from '../constants';

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  }
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("❌ API ERROR:", {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
      url: error.config?.url,
    });

    return Promise.reject(error);
  }
);

export default apiClient;