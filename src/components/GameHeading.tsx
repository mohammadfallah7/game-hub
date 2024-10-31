import { GameQuery } from "@/App";
import useGenre from "@/hooks/use-genre";
import usePlatform from "@/hooks/use-platform";
import { Heading } from "@chakra-ui/react";

interface IGameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading: React.FC<IGameHeadingProps> = ({ gameQuery }) => {
  const platform = usePlatform(gameQuery.platform);
  const genre = useGenre(gameQuery.genre);

  return (
    <Heading mb={5} fontSize="5xl" lineHeight={1.5}>
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
