import Navbar from "@/components/Navbar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box px={5}>
      <Navbar />

      <Heading fontSize="4xl" mt={5} mb={3}>
        Oops
      </Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page does not exist."
          : "An unexpected error occurred."}
      </Text>
    </Box>
  );
};

export default ErrorPage;
