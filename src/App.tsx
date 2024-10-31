import { Grid, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: number;
  platform: number;
  sort: string;
  search: string;
}

const App = () => {
  return (
    <Grid gridColumn={2} gridTemplateColumns={"1fr 5fr"} gap={5} px={4}>
      <GridItem colSpan={2}>
        <Navbar />
      </GridItem>

      <GridItem display={{ base: "none", lg: "block" }} colSpan={{ lg: 1 }}>
        <GenreList />
      </GridItem>

      <GridItem colSpan={{ base: 2, lg: 1 }}>
        <GameHeading />
        <HStack mb={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
