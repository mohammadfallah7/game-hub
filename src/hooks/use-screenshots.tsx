import ApiClient from "@/services/api-client";
import { Screenshot } from "@/types/screenshot.mode";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useScreenshots = (slug: string) => {
  const apiClient = new ApiClient<Screenshot>(
    "/games/" + slug + "/screenshots"
  );

  return useQuery({
    queryKey: ["screenshots", slug],
    queryFn: () => apiClient.readAll(),
    staleTime: ms("1d"),
  });
};

export default useScreenshots;
