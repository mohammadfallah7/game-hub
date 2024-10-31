import { Game } from "@/types/game.model";
import getImage from "@/utilities/get-image";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface IGameCardProps {
  game: Game;
}

const GameCard: React.FC<IGameCardProps> = ({ game }) => {
  return (
    <Card.Root overflow="hidden">
      <Image src={getImage(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between" mb={3}>
          <PlatformIconList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name} <Emoji rating={game.rating_top} />
        </Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
