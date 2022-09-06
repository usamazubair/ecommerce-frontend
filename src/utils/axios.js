import axios from "axios";

const baseInstance = axios.create({
  baseURL: `http://localhost:3001/shopify`,
});

baseInstance.defaults.headers.common["Accept"] = "application/json";
baseInstance.defaults.headers.common["Content-Type"] = "application/json";
// baseInstance.defaults.headers.common["Accept-version"] = 1.3;

baseInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

baseInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.response?.status === 401) {
      localStorage.clear();

      window.location.reload();
    }

    throw err;
  }
);

export default baseInstance;
