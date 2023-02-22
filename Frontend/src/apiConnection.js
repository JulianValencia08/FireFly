import axios from "axios";

const baseUrl = "http://localhost:8000/api/v1/"
const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
  }
});
export default axiosInstance