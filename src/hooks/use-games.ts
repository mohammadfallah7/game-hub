import useData from "./use-data";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  slug: string;
}

const useGames = () => useData<Game>("/games");

export default useGames;
