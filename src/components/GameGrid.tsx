import useGames from "@/hooks/use-games";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
      {isLoading
        ? skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)
        : games.map((game) => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  );
};

export default GameGrid;
