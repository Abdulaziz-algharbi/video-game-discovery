import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  chosenGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, chosenGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [...Array(20)].map((_, i) => i + 1);
  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading && (
          <>
            <Spinner />
            {skeletons.map((skeleton) => (
              <GenreSkeleton key={skeleton} />
            ))}
          </>
        )}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="clamp(12px, 2vw, 18px)"
                fontWeight={genre.id === chosenGenre?.id ? "bold" : "normal"}
                maxW="150px"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
