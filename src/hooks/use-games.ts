import { GameQuery } from "@/App";
import ApiClient from "@/services/api-client";
import { Game } from "@/types/game.model";
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.readAll({
        params: {
          search: gameQuery.search,
          parent_platforms: gameQuery.platform?.id,
          genres: gameQuery.genre?.id,
          ordering: gameQuery.sort,
        },
      }),
  });

export default useGames;
