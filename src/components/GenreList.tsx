import useGenres from "@/hooks/use-genres";
import getImage from "@/utilities/get-image";
import { HStack, Image, Link, List } from "@chakra-ui/react";

const GenreList = () => {
  const { data: genres } = useGenres();

  return (
    <List.Root variant="plain">
      {genres.map((genre) => (
        <List.Item key={genre.id} pb={3}>
          <HStack>
            <Image
              src={getImage(genre.image_background)}
              boxSize="32px"
              objectFit="cover"
              borderRadius={8}
            />
            <Link fontSize="lg">{genre.name}</Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
