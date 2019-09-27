import React from "react";
import { Box, Heading, Text, Link } from "@chakra-ui/core";

export const BreweryCard = ({ brewery }) => {
  return (
    <Box
      rounded="lg"
      boxShadow="lg"
      bg="white"
      p={4}
      m={2}
      color="#333"
      width={[
        "100%", // base
        "50%", // 480px upwards
        "25%" // 768px upwards
      ]}
    >
      <Heading as="h3" size="md" mb={2} fontFamily="'Abril Fatface', Cursive">
        {brewery.name}
      </Heading>
      <Text fontFamily='"Poppins", Sans-Serif' fontSize="lg">
        {brewery.city}, {brewery.state}
      </Text>
      <Text fontFamily='"Poppins", Sans-Serif' mb={2}>
        Type: {brewery.brewery_type}
      </Text>
      {brewery.website_url && (
        <Link
          fontFamily='"Poppins", Sans-Serif'
          href={brewery.website_url}
          isExternal
          color="black"
        >
          Visit Website
        </Link>
      )}
    </Box>
  );
};
