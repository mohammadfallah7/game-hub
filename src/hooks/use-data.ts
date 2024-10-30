import axiosInstance from "@/services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const useData = <K>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: (string | number | undefined)[]
) => {
  const [data, setData] = useState<K[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);

      axiosInstance
        .get<FetchDataResponse<K>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((response) => {
          setData(response.data.results);
          setLoading(false);
        })
        .catch((error: Error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [endpoint, ...deps] : [endpoint]
  );

  return { data, error, isLoading };
};

export default useData;