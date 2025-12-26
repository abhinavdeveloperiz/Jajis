import axios from "axios";



// export const API_BASE_URL = "http://localhost:8000/"

export const API_BASE_URL = "/api/";


// Create axios instance
export const API = axios.create({
  baseURL: API_BASE_URL,
});

// Automatically attach token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});
