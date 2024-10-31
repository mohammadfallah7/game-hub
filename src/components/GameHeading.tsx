import useGenre from "@/hooks/use-genre";
import usePlatform from "@/hooks/use-platform";
import useGameQuery from "@/stores/use-game-query";
import { Heading } from "@chakra-ui/react";

const GameHeading: React.FC = () => {
  const platformId = useGameQuery((state) => state.gameQuery.platform);
  const genreId = useGameQuery((state) => state.gameQuery.genre);
  const platform = usePlatform(platformId!);
  const genre = useGenre(genreId!);

  return (
    <Heading mb={5} fontSize="5xl" lineHeight={1.5}>
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
