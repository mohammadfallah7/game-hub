import ApiClient from "@/services/api-client";
import { GameDetails } from "@/types/game.details.model";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new ApiClient<GameDetails>("/games");

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.read(slug),
    staleTime: ms("1d"),
  });
};

export default useGame;
