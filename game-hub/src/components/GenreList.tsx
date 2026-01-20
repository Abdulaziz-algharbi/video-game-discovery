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
  onSelectGenre: (genre: number) => void;
  chosenGenreId?: number;
}

const GenreList = ({ onSelectGenre, chosenGenreId }: Props) => {
  const { data, error, isLoading } = useGenres();
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
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre.id)}
                variant="link"
                fontSize="clamp(12px, 2vw, 18px)"
                fontWeight={genre.id === chosenGenreId ? "bold" : "normal"}
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
