import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import { Genre } from "./hooks/use-genres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/use-games";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
        <Heading mb={5} fontSize="4xl">
          {selectedPlatform?.name || "All"} {selectedGenre?.name} Games
        </Heading>
        <Box mb={5}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
        </Box>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
