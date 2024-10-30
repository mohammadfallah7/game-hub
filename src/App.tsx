import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import { Genre } from "./hooks/use-genres";
import PlatformSelector from "./components/PlatformSelector";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid gridColumn={2} gridTemplateColumns={"1fr 5fr"} gap={5} px={4}>
      <GridItem colSpan={2}>
        <Navbar />
      </GridItem>

      <GridItem display={{ base: "none", lg: "block" }} colSpan={{ lg: 1 }}>
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>

      <GridItem colSpan={{ base: 2, lg: 1 }}>
        <Box mb={5}>
          <PlatformSelector />
        </Box>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
