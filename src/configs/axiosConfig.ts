import axios from "axios";
import { useSessionStorage } from "../hooks/useSessionStorage";

const URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { getItem } = useSessionStorage();
    const token = getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      const { deleteItem } = useSessionStorage();
      deleteItem("accessToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
