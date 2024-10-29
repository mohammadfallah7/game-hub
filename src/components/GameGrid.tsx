import useGames from "@/hooks/use-games";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
