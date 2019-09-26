import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from "@chakra-ui/core";
import { BreweryCard } from "./BreweryCard";
import Options from "./Options";

const BreweriesList = () => {
  const [breweries, setBreweries] = useState([]);
  const [currentState, setCurrentState] = useState("");
  const [currentType, setCurrentType] = useState("");

  const getByFilter = (state = "California", type = "micro") => {
    console.log("state", state);
    console.log("type", type);
    axios
      .get(
        `https://api.openbrewerydb.org/breweries?by_state=${state}&per_page=35&by_type=${type}`
      )
      .then(res => {
        setBreweries(res.data);
      })
      .catch(err => {
        console.error(err);
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
        justify="center"
        mt="100px"
        maxW="370px"
        w="100%"
        margin="40px auto 0"
      >
        <Options
          setCurrentState={setCurrentState}
          setCurrentType={setCurrentType}
        />
      </Flex>
      <Flex wrap="wrap" justify="center" mt="80px">
        {breweries.length ? (
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
