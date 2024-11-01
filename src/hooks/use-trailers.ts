import ApiClient from "@/services/api-client";
import { Trailer } from "@/types/trailer.model";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useTrailers = (id: number) => {
  const apiClient = new ApiClient<Trailer>("/games/" + id + "/movies");

  return useQuery({
    queryKey: ["trailer", id],
    queryFn: () => apiClient.readAll(),
    staleTime: ms("1d"),
  });
};

export default useTrailers;
