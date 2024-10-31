import { GameQuery } from "@/App";
import ApiClient from "@/services/api-client";
import { Game } from "@/types/game.model";
import { useInfiniteQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.readAll({
        params: {
          search: gameQuery.search,
          parent_platforms: gameQuery.platform?.id,
          genres: gameQuery.genre?.id,
          ordering: gameQuery.sort,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      return lastPage.length > 0 ? lastPageParam + 1 : undefined;
    },
  });

export default useGames;
