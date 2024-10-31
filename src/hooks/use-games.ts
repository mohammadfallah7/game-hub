import ApiClient from "@/services/api-client";
import useGameQuery from "@/stores/use-game-query";
import { Game } from "@/types/game.model";
import { useInfiniteQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQuery((state) => state.gameQuery);

  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.readAll({
        params: {
          search: gameQuery.search,
          parent_platforms: gameQuery.platform,
          genres: gameQuery.genre,
          ordering: gameQuery.sort,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      return lastPage.length > 0 ? lastPageParam + 1 : undefined;
    },
  });
};

export default useGames;
