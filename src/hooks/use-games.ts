import { GameQuery } from "@/App";
import axiosInstance, { FetchDataResponse } from "@/services/api-client";
import { Game } from "@/types/game.model";
import { useQuery } from "@tanstack/react-query";

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      axiosInstance
        .get<FetchDataResponse<Game>>("/games", {
          params: {
            search: gameQuery.search,
            parent_platforms: gameQuery.platform?.id,
            genres: gameQuery.genre?.id,
            ordering: gameQuery.sort,
          },
        })
        .then((response) => response.data.results),
  });

export default useGames;
