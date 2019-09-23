import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex } from "@chakra-ui/core";
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
      <Flex wrap="wrap" justify="center">
        {breweries &&
          breweries.map(brewery => (
            <BreweryCard key={brewery.id} brewery={brewery} />
          ))}
      </Flex>
    </>
  );
};

export default BreweriesList;
