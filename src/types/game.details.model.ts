import { Genre } from "./genre.model";
import { Platform } from "./platform.model";
import { Publisher } from "./publisher.model";

export type GameDetails = {
  id: number;
  name: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  publishers: Publisher[];
  genres: Genre[];
};
