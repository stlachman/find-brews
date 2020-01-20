import React, { useState, useEffect } from "react";
import { Flex, Spinner, Box, Heading, Text, Link, Icon } from "@chakra-ui/core";
import { useLocation, Link as ReactLink } from "react-router-dom";
import Map from "./Map";

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
      <Flex wrap="wrap" flexDir="column" align="center" justify="center">
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : (
          <>
            <Box>
              <Map
                name={brewery.name}
                lat={brewery.latitude}
                long={brewery.longitude}
              />
            </Box>
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
              <Heading as="h3" size="md" mb={2} fontFamily={"heading"}>
                {brewery.name}
              </Heading>
              <Text fontFamily={"body"} fontSize="lg">
                {brewery.city}, {brewery.state}
              </Text>
              <Text fontFamily={"body"} mb={2}>
                Type: {brewery.brewery_type}
              </Text>
              {brewery.website_url && (
                <Link
                  fontFamily={"body"}
                  href={brewery.website_url}
                  isExternal
                  color="black"
                >
                  Visit Website
                </Link>
              )}
            </Box>
            <Flex ml="30px" mt="15px">
              <Link as={ReactLink} to="/">
                <Icon name="arrow-back" />
                Go Back
              </Link>
            </Flex>
          </>
        )}
      </Flex>
    </>
  );
}
