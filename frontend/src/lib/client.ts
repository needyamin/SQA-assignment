import { getLocalStorage, removeLocalStorage } from "@/utils/localStorage";
import axios from "axios";
const baseURL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  (config) => {
    const accessToken = getLocalStorage("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      console.warn("No token found in localStorage");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      removeLocalStorage("accessToken");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
