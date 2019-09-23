import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex, Text } from "@chakra-ui/core";
import { BreweryCard } from "./BreweryCard";

const BreweriesList = () => {
  const [breweries, setBreweries] = useState([]);

  const fetchData = () => {
    axios
      .get("https://api.openbrewerydb.org/breweries?page=1&per_page=35")
      .then(res => {
        setBreweries(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Flex justify="center">
        <Text as="h2" fontsize="6xl" fontFamily="'Abril Fatface', Cursive">
          Breweries
        </Text>
      </Flex>
      <Flex wrap="wrap" justify="center">
        {breweries &&
          breweries.map(brewery => (
            <BreweryCard id={brewery.id} brewery={brewery} />
          ))}
      </Flex>
    </>
  );
};

export default BreweriesList;
