import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

const App = () => {
  return (
    <Grid gridColumn={12} gap={5} px={4}>
      <GridItem colSpan={12}>
        <Navbar />
      </GridItem>

      <GridItem display={{ base: "none", lg: "block" }} colSpan={{ lg: 2 }}>
        <GenreList />
      </GridItem>

      <GridItem colSpan={{ base: 12, lg: 10 }}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
