import { Badge } from "@chakra-ui/react";

interface ICriticScoreProps {
  score?: number;
}

const CriticScore: React.FC<ICriticScoreProps> = ({ score }) => {
  const color =
    score && score > 75 ? "green" : score && score > 60 ? "yellow" : "red";

  return (
    <Badge size="md" colorPalette={color}>
      {score || 0}
    </Badge>
  );
};

export default CriticScore;
