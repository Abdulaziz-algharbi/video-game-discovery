import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack spacing="10px">
        <Skeleton boxSize="32px" borderRadius="8px" />
        <Skeleton height="20px" width="120px" />
      </HStack>
    </ListItem>
  );
};

export default GenreSkeleton;
