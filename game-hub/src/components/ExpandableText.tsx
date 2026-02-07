import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  text: string;
}

function ExpandableText({ text }: Props) {
  const [expanded, setExpanded] = useState(false);
  if (!text) return null;
  const limit = 300;
  const isLong = text.length > limit;

  const displayedDescription = expanded ? text : text.substring(0, limit);

  return (
    <>
      <Text>
        {displayedDescription}
        {isLong && !expanded && "..."}
      </Text>
      {isLong && (
        <Button
          size="sm"
          fontWeight="bold"
          colorScheme="yellow"
          marginTop={2}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      )}
    </>
  );
}

export default ExpandableText;
