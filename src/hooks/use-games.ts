import { GameQuery } from "@/App";
import useData from "./use-data";

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
  useData<Game, GameQuery>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sort,
        search: gameQuery.search,
      },
    },
    [gameQuery]
  );

export default useGames;
