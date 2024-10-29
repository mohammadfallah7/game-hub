import { Badge } from "@chakra-ui/react";

interface ICriticScoreProps {
  score: number;
}

const CriticScore: React.FC<ICriticScoreProps> = ({ score }) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge size="md" colorPalette={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
