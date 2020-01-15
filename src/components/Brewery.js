import React, { useState, useEffect } from "react";
import { Flex, Spinner, Box, Heading, Text, Link } from "@chakra-ui/core";
import { useLocation, Link as ReactLink } from "react-router-dom";

export default function() {
  const [brewery, setBrewery] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  let location = useLocation();
  useEffect(() => {
    const number = /\d+/g;

    let brewerID = location.pathname.match(number);
    fetch(`https://api.openbrewerydb.org/breweries/${brewerID}`, {
      method: "GET"
    })
      .then(r => r.json())
      .then(r => {
        console.log(r);
        setBrewery(r);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, [location.pathname]);

  return (
    <>
      <Flex ml="30px" mt="15px">
        <Link as={ReactLink} to="/">
          Go Back
        </Link>
      </Flex>
      <Flex wrap="wrap" justify="center" mt="65px">
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : (
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
              "50%" // 768px upwards
            ]}
          >
            <Heading
              as="h3"
              size="md"
              mb={2}
              fontFamily="'Abril Fatface', Cursive"
            >
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
        )}
      </Flex>
    </>
  );
}
