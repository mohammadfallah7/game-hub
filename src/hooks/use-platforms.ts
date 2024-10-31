import platforms from "@/data/platforms";
import axiosInstance, { FetchDataResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./use-games";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      axiosInstance
        .get<FetchDataResponse<Platform>>("/platforms/lists/parents")
        .then((response) => response.data.results),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: platforms,
  });

export default usePlatforms;
