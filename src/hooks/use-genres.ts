import genres from "@/data/genres";
import axiosInstance, { FetchDataResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      axiosInstance
        .get<FetchDataResponse<Genre>>("/genres")
        .then((response) => response.data.results),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  });

export default useGenres;
