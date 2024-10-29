import useGenres from "@/hooks/use-genres";
import getImage from "@/utilities/get-image";
import { HStack, Image, Link, List } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

const GenreList = () => {
  const { data: genres, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <List.Root variant="plain">
      {isLoading
        ? skeletons.map((skeleton) => (
            <List.Item key={skeleton} pb={3}>
              <SkeletonText />
            </List.Item>
          ))
        : genres.map((genre) => (
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
