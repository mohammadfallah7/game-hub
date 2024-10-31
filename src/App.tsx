import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: number;
  platform: number;
  sort: string;
  search: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid gridColumn={2} gridTemplateColumns={"1fr 5fr"} gap={5} px={4}>
      <GridItem colSpan={2}>
        <Navbar onSearch={(search) => setGameQuery({ ...gameQuery, search })} />
      </GridItem>

      <GridItem display={{ base: "none", lg: "block" }} colSpan={{ lg: 1 }}>
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>

      <GridItem colSpan={{ base: 2, lg: 1 }}>
        <GameHeading
          selectedGenre={gameQuery.genre}
          selectedPlatform={gameQuery.platform}
        />
        <HStack mb={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sort={gameQuery.sort}
            onSort={(sort) => setGameQuery({ ...gameQuery, sort })}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
