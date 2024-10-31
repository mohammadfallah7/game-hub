import { create } from "zustand";

interface GameQuery {
  genre?: number;
  platform?: number;
  sort?: string;
  search?: string;
}

type GameQueryStore = {
  gameQuery: GameQuery;
  setGenre: (genre: number) => void;
  setPlatform: (platform: number) => void;
  setSort: (sort: string) => void;
  setSearch: (search: string) => void;
};

const useGameQuery = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenre: (genre) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genre } })),
  setPlatform: (platform) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platform } })),
  setSort: (sort) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sort } })),
  setSearch: (search) => set(() => ({ gameQuery: { search } })),
}));

export default useGameQuery;
