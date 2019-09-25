import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex } from "@chakra-ui/core";
import { BreweryCard } from "./BreweryCard";
import Options from "./Options";

const BreweriesList = () => {
  const [breweries, setBreweries] = useState([]);
  const [currentState, setCurrentState] = useState("");

  const getByState = state => {
    axios
      .get(
        `https://api.openbrewerydb.org/breweries?by_state=${state}&per_page=35`
      )
      .then(res => {
        setBreweries(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    getByState(currentState);
  }, [currentState]);

  return (
    <>
      <Flex wrap="wrap" justify="center" mt="100px">
        <Options setCurrentState={setCurrentState} />
      </Flex>
      <Flex wrap="wrap" justify="center" mt="80px">
        {breweries &&
          breweries.map(brewery => (
            <BreweryCard key={brewery.id} brewery={brewery} />
          ))}
      </Flex>
    </>
  );
};

export default BreweriesList;
