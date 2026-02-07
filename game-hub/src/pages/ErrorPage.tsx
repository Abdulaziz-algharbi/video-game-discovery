import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading as="h1" marginY={5} fontSize="5xl">
          Opps
        </Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An Unexpected Error Occurred."}
        </Text>
      </Box>
    </>
  );
}

export default ErrorPage;
