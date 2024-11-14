import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://ass3be.onrender.com/",
  // baseURL: "http://localhost:8080/",
  timeout: 10000,
  withCredentials: true,
});

export default axiosClient;
