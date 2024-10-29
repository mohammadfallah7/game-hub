import { Game } from "@/hooks/use-games";
import { Card, Heading, Image } from "@chakra-ui/react";

interface IGameCardProps {
  game: Game;
}

const GameCard: React.FC<IGameCardProps> = ({ game }) => {
  return (
    <Card.Root overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
