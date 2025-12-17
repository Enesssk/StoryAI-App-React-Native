import axios from 'axios';
import {
  IMAGE_API_KEY,
  IMAGE_BASE_URL,
  WORKER_API_KEY,
  WORKER_BASE_URL,
} from '../../constants';


const imageApiClient = axios.create({
  baseURL: IMAGE_BASE_URL,
  timeout: 60000,
  headers: {
    "Authorization": `Bearer ${IMAGE_API_KEY}`,
    "Content-Type": "application/json",
  }
})

imageApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("❌ IMAGE API ERROR:", {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
      url: error.config?.url,
    });

    return Promise.reject(error);
  }
);


export default imageApiClient;