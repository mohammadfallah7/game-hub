import platforms from "@/data/platforms";
import axiosInstance, { FetchDataResponse } from "@/services/api-client";
import { Platform } from "@/types/platforms.model";
import { useQuery } from "@tanstack/react-query";

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
