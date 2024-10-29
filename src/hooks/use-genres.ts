import axiosInstance from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const [genres, setGames] = useState<Genre[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    axiosInstance
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
        setLoading(false);
      })
      .catch((error: Error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
