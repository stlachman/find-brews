import React, { useState, useEffect } from "react";
import {
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner
} from "@chakra-ui/core";
import { BreweryCard } from "./BreweryCard";
import Options from "./Options";

const BreweriesList = () => {
  const [breweries, setBreweries] = useState([]);
  const [currentState, setCurrentState] = useState("");
  const [currentType, setCurrentType] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getByFilter = (state = "California", type = "micro") => {
    fetch(
      `https://api.openbrewerydb.org/breweries?by_state=${state}&per_page=35&by_type=${type}`,
      {
        method: "GET"
      }
    )
      .then(r => r.json())
      .then(r => {
        setBreweries(r);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.error(err);
        return [];
      });
  };

  useEffect(() => {
    getByFilter(currentState, currentType);
  }, [currentState, currentType]);

  return (
    <>
      <Flex
        wrap="wrap"
        align="center"
        direction="row"
        justify="space-evenly"
        mt="100px"
        maxW="560px"
        w="100%"
        margin="40px auto 0"
      >
        <Options
          setCurrentState={setCurrentState}
          currentType={currentType}
          currentState={currentState}
          setCurrentType={setCurrentType}
        />
      </Flex>

      <Flex wrap="wrap" justify="center" mt="80px">
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : breweries.length ? (
          breweries.map(brewery => (
            <BreweryCard key={brewery.id} brewery={brewery} />
          ))
        ) : (
          <Alert
            status="error"
            variant="subtle"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon size="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              No results found
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Please try another search parameter.
            </AlertDescription>
          </Alert>
        )}
      </Flex>
    </>
  );
};

export default BreweriesList;
