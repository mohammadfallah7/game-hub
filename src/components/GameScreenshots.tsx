import useScreenshots from "@/hooks/use-screenshots";
import getImage from "@/utilities/get-image";
import { Image, SimpleGrid, Skeleton } from "@chakra-ui/react";
import React from "react";

interface IGameScreenshotsProps {
  slug: string;
}

const GameScreenshots: React.FC<IGameScreenshotsProps> = ({ slug }) => {
  const { data: screenshots, error, isLoading } = useScreenshots(slug);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} my={8}>
      {isLoading
        ? skeletons.map((skeleton) => (
            <Skeleton key={skeleton} height="150px" />
          ))
        : screenshots?.map((screenshot) => (
            <Image
              borderRadius={5}
              objectFit="cover"
              key={screenshot.id}
              src={getImage(screenshot.image)}
            />
          ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
