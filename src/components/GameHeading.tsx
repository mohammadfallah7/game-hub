import useGenres from "@/hooks/use-genres";
import usePlatforms from "@/hooks/use-platforms";
import { Heading } from "@chakra-ui/react";

interface IGameHeadingProps {
  selectedGenre: number;
  selectedPlatform: number;
}

const GameHeading: React.FC<IGameHeadingProps> = ({
  selectedGenre,
  selectedPlatform,
}) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const platform = platforms.find(
    (platform) => platform.id === selectedPlatform
  );
  const genre = genres.find((genre) => genre.id === selectedGenre);

  return (
    <Heading mb={5} fontSize="5xl" lineHeight={1.5}>
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
