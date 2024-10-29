import axiosInstance from "@/services/api-client";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface FetchGameResponse {
  count: number;
  results: Game[];
}

interface Game {
  id: number;
  name: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axiosInstance
      .get<FetchGameResponse>("/games")
      .then((response) => setGames(response.data.results))
      .catch((error: Error) => setError(error.message));
  }, []);

  if (error) return <Text>{error}</Text>;

  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
