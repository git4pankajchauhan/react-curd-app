import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `http://localhost:3003`,
});

axiosInstance.interceptors.request.use((config) => {
  const token = "mytoken";
  config.params = config.params || {};
  config.headers["Accept"] = "Content-type': 'application/json";
  if (token) config.headers["x-access-token"] = token;
  return config;
});

export default axiosInstance;
