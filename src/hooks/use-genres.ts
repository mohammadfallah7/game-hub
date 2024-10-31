import genres from "@/data/genres";
import ApiClient from "@/services/api-client";
import { Genre } from "@/types/genre.model";
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.readAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  });

export default useGenres;
