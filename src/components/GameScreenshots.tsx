import useScreenshots from "@/hooks/use-screenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

interface IGameScreenshotsProps {
  slug: string;
}

const GameScreenshots: React.FC<IGameScreenshotsProps> = ({ slug }) => {
  const { data: screenshots, error, isLoading } = useScreenshots(slug);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={5} mt={5}>
      {screenshots?.map((screenshot) => (
        <Image borderRadius={5} key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
