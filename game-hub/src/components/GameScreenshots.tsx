import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { SimpleGrid, Image } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

function GameScreenshots({ gameId }: Props) {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      {data?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} objectFit="cover" />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
