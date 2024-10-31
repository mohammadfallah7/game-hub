import platforms from "@/data/platforms";
import ApiClient from "@/services/api-client";
import { Platform } from "@/types/platforms.model";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.readAll(),
    staleTime: ms("1d"),
    initialData: platforms,
  });

export default usePlatforms;
