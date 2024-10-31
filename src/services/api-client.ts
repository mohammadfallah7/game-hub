import axios, { AxiosRequestConfig } from "axios";

interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "3f538129837148489aa6fb3a134a5e48" },
});

class ApiClient<T> {
  constructor(private endpoint: string) {}

  async readAll(requestConfig?: AxiosRequestConfig) {
    const response = await axiosInstance.get<FetchDataResponse<T>>(
      this.endpoint,
      { ...requestConfig }
    );

    return response.data.results;
  }
}

export default ApiClient;
