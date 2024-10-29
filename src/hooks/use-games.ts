import axiosInstance from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchGameResponse {
  count: number;
  results: Game[];
}

interface Game {
  id: number;
  name: string;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();

    axiosInstance
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((response) => setGames(response.data.results))
      .catch((error: Error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
