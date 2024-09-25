import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://ass3be.onrender.com/",
  timeout: 3000,
  withCredentials: true,
});

export default axiosClient;
