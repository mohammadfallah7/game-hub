import useGames from "@/hooks/use-games";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Fragment } from "react/jsx-runtime";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid: React.FC = () => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  const dataLength =
    games?.pages.reduce(
      (accumulator, current) => accumulator + current.length,
      0
    ) || 0;

  if (error) return <Text color="red.solid">{error.message}</Text>;

  return (
    <InfiniteScroll
      dataLength={dataLength}
      next={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5} p={2}>
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
    </InfiniteScroll>
  );
};

export default GameGrid;
