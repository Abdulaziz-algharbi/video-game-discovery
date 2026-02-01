import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
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
                onClick={() => setGenreId(genre.id)}
                variant="link"
                fontSize="clamp(12px, 2vw, 18px)"
                fontWeight={genre.id === genreId ? "bold" : "normal"}
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
