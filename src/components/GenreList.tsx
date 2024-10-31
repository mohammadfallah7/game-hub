import useGenres from "@/hooks/use-genres";
import useGameQuery from "@/stores/use-game-query";
import getImage from "@/utilities/get-image";
import { Heading, HStack, Image, Link, List } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

const GenreList: React.FC = () => {
  const { data: genres, isLoading } = useGenres();
  const setGenre = useGameQuery((state) => state.setGenre);
  const selectedGenre = useGameQuery((state) => state.gameQuery.genre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <Heading mb={5}>Genres</Heading>
      <List.Root variant="plain">
        {isLoading
          ? skeletons.map((skeleton) => (
              <List.Item key={skeleton} pb={3}>
                <SkeletonText />
              </List.Item>
            ))
          : genres?.map((genre) => (
              <List.Item key={genre.id} pb={3}>
                <HStack>
                  <Image
                    src={getImage(genre.image_background)}
                    boxSize="32px"
                    objectFit="cover"
                    borderRadius={8}
                  />
                  <Link
                    onClick={() => setGenre(genre.id)}
                    fontSize={selectedGenre === genre.id ? "lg" : "md"}
                    fontWeight={
                      selectedGenre === genre.id ? "semibold" : "normal"
                    }
                  >
                    {genre.name}
                  </Link>
                </HStack>
              </List.Item>
            ))}
      </List.Root>
    </>
  );
};

export default GenreList;
