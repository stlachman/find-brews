import React from "react";
import { Box, Heading, Text, Link } from "@chakra-ui/core";

export const BreweryCard = ({ brewery }) => {
  return (
    <Box rounded="lg" bg="white" p={4} color="black" width={[1, 1 / 2, 1 / 4]}>
      <Heading as="h3" size="md" fontFamily="'Abril Fatface', Cursive">
        {brewery.name}
      </Heading>
      <Text fontSize="lg">
        {brewery.city}, {brewery.state}
      </Text>
      <Link href={brewery.website_url} isExternal color="black">
        Visit Website
      </Link>
    </Box>
  );
};
