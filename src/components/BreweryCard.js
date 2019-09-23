import React from "react";
import { Box, Text } from "@chakra-ui/core";

export const BreweryCard = ({ brewery }) => {
  return (
    <Box bg="white" p={4} color="black" width={[1, 1 / 2, 1 / 4]}>
      <Text as="h3" fontFamily="'Abril Fatface', Cursive">
        {brewery.name}
      </Text>
      <Text fontSize="lg" fontFamily="'Poppins', Sans-Serif">
        {brewery.city}, {brewery.state}
      </Text>
    </Box>
  );
};
