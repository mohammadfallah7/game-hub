import genres from "@/data/genres";
import ApiClient from "@/services/api-client";
import { Genre } from "@/types/genre.model";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.readAll(),
    staleTime: ms("1d"),
    initialData: genres,
  });

export default useGenres;
