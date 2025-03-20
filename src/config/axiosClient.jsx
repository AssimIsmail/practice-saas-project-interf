import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.API_URL}/api`,  
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
