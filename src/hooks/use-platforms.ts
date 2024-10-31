import platforms from "@/data/platforms";
import ApiClient from "@/services/api-client";
import { Platform } from "@/types/platforms.model";
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.readAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: platforms,
  });

export default usePlatforms;
