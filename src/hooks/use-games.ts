import { GameQuery } from "@/App";
import axiosInstance, { FetchDataResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

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
