import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "3f538129837148489aa6fb3a134a5e48" },
});

export default axiosInstance;
