import { GameQuery } from "@/App";
import useGames from "@/hooks/use-games";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Button } from "./ui/button";

interface IGameGridProps {
  gameQuery: GameQuery;
}

const GameGrid: React.FC<IGameGridProps> = ({ gameQuery }) => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text color="red.solid">{error.message}</Text>;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5} mb={5}>
        {isLoading
          ? skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)
          : games?.pages.map((games, index) => (
              <Fragment key={index}>
                {games.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </Fragment>
            ))}
      </SimpleGrid>
      <Button
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
        mb={5}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </Button>
    </>
  );
};

export default GameGrid;
