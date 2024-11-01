import useTrailers from "@/hooks/use-trailers";
import { Box } from "@chakra-ui/react";

interface IGameTrailerProps {
  gameId: number;
}

const GameTrailer: React.FC<IGameTrailerProps> = ({ gameId }) => {
  const { data: trailers } = useTrailers(gameId);
  const first = trailers?.[0];

  return first ? (
    <Box>
      <video src={first.data.max} controls poster={first.preview} />
    </Box>
  ) : null;
};

export default GameTrailer;
