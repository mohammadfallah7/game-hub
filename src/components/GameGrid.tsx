import useGames from "@/hooks/use-games";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

import { GameQuery } from "@/App";

interface IGameGridProps {
  gameQuery: GameQuery;
}

const GameGrid: React.FC<IGameGridProps> = ({ gameQuery }) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text color="red.solid">{error}</Text>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
      {isLoading
        ? skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)
        : games.map((game) => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  );
};

export default GameGrid;
